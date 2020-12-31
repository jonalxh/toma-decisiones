<template>
  <div class="container mt-4">
    <h3>Toma de decisiones</h3>
    <b-row>
      <b-col>
        <b-form-group description="Las columnas son los datos verticales de una tabla" label="Cantidad de columnas" label-for="cols">
          <b-form-input type="number" min="1" max="50" id="cols" v-model.number="cols"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group description="Las filas son los datos horizontales de una tabla" label="Cantidad de filas" label-for="rows">
          <b-form-input type="number" min="1" max="50" id="rows" v-model.number="rows"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group id="criteria" description="Selecciona un valor" label="Criterio de generación" label-for="criteria">
          <b-form-select v-model="criteria" :options="criteriaOptions" @change="generateResults()"></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row class="mt-3" v-if="false">
      <b-col>
        <b-form-group description="Ingresa los nombres separados por comas (,)" label="Nombre de los escenarios o estados" label-for="scenarios">
          <b-form-input id="scenarios" v-model="scenarios" trim></b-form-input>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group id="models" description="Ingresa los valores separados por comas (,)" label="Modelos o alternativas" label-for="models">
          <b-form-input id="models" @keydown.space.prevent v-model="models" trim></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <hr />

    <b-row class="mt-5" id="result">
      <h3 class="text-center w-100">Tabla de resultados</h3>
      <div class="table-responsive">
        <table class="mx-auto mt-3 table table-hover table-bordered" id="main-table">
          <thead class="thead-dark font-weight-bold">
            <tr>
              <th rowspan="2">Alternativas</th>
              <th :colspan="cols">Escenarios o estados</th>
              <th colspan="2">Totales</th>
            </tr>
            <tr>
              <th v-for="col in cols" :key="col">Escenario {{ col }}</th>
              <th>Mínimo</th>
              <th>Máximo</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="row in rows" :key="row">
              <td class="font-weight-bold">Alternativa {{ row }}</td>
              <td v-for="col in cols" :key="col">
                <b-form-input type="number" trim placeholder="Ingresa valor" @input="generateResults()"></b-form-input>
              </td>
              <td class="minRow"></td>
              <td class="maxRow"></td>
            </tr>
            <tr>
              <td class="font-weight-bold">Mínimo</td>
              <td v-for="col in cols" :key="col" class="minCol">--</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td class="font-weight-bold">Máximo</td>
              <td v-for="col in cols" :key="col" class="maxCol">--</td>
              <td>--</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
      </div>

      <b-col class="mx-auto mt-4 text-center border border-dark p-4" v-if="result != undefined" cols="11" md="10">
        <h4>Resultado: <span v-html="result"> </span></h4>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      models: "",
      scenarios: "",
      criteria: "",
      criteriaOptions: [
        {
          text: "Wald (Maximin)",
          value: "WALD",
          description: "Se asigna el peor de los escenarios y se escoge el mejor",
        },
        { text: "Maximax", value: "MAXIMAX" },
        { text: "Savage (Perdida)", value: "SAVAGEMIN" },
        { text: "Savage (Ganancia)", value: "SAVAGEMAX" },
        { text: "Laplace", value: "LAPLACE" },
        { text: "Hurwicz", value: "HURWICZ" },
      ],

      cols: "",
      rows: "",
      result: undefined,
      totals: [],
      totalsCols: [],
      totalMin: [],
      totalMax: [],
      totalMinCol: [],
      totalMaxCol: [],
      totalMinRow: [],
      totalMaxRow: [],
      newMatrizSavageMax: [],
    };
  },
  methods: {
    generateResults() {
      this.getTotals();

      switch (this.criteria) {
        case "WALD": {
          this.wald();
          break;
        }
        case "MAXIMAX": {
          this.maximax();
          break;
        }
        case "SAVAGEMIN": {
          this.savageMin();
          break;
        }
        case "SAVAGEMAX": {
          this.savageMax();
          break;
        }
        case "LAPLACE": {
          this.laplace();
          break;
        }
      }
      /* this.models = this.models.replace(/\s/g, "");
			this.scenarios = this.scenarios.replace(/\s/g, "");

			this.cols = this.scenarios.split(",");
			this.rows = this.models.split(","); */
    },
    async getTotals() {
      this.totals = [];
      this.totalMin = [];
      this.totalMax = [];

      await $.each($("#main-table tbody tr"), (index, row) => {
        let nums = [];
        $.each($(row).find("input"), (i, input) => {
          nums.push($(input).val());
        });
        const minRow = Math.min.apply(Math, nums); // Encuentro el mínimo de la fila
        const maxRow = Math.max.apply(Math, nums); // Encuentro el máximo de la fila

        this.totals.push(nums);

        $(row)
          .find(".minRow")
          .html(minRow);
        $(row)
          .find(".maxRow")
          .html(maxRow);

        //this.result = Math.max.apply(Math, this.totals); // Saco el máximo de todos los totales
      });

      this.getColTotals();
    },
    getColTotals() {
      try {
        this.totalMinCol = [];
        this.totalMaxCol = [];
        this.totalsCols = [];
        for (let i in this.totals[0]) {
          const nums = this.totals.map((val) => Number(val[i]));
          this.totalsCols.push(nums);

          const minCol = Math.min.apply(
            Math,
            nums.filter((n) => !isNaN(n))
          ); // Encuentro el mínimo de la columna

          const maxCol = Math.max.apply(
            Math,
            nums.filter((n) => !isNaN(n))
          ); // Encuentro el máximo de la columna

          // Asignación en la tabla
          $($("#main-table tbody td.minCol")[i]).html(minCol);
          $($("#main-table tbody td.maxCol")[i]).html(maxCol);
          this.totalMinCol.push(minCol);
          this.totalMaxCol.push(maxCol);
        }
        // console.log("getColTotals -> this.totalMinCol", this.totalMinCol);
        // console.log("getColTotals -> this.totalMaxCol", this.totalsCols);
      } catch (error) {
        console.error("getColTotals -> error", error);
      }
    },
    wald() {
      $.each($("#main-table tbody tr"), (index, row) => {
        let nums = [];
        $.each($(row).find("input"), (index, input) => {
          nums.push($(input).val());
        });
        const res = Math.min.apply(Math, nums); // Encuentro el mínimo de la fila
        this.totals.push(res);
        $(row)
          .find("td:last-of-type")
          .html(res);

        this.result = Math.max.apply(Math, this.totals); // Saco el máximo de todos los totales
      });
    },
    maximax() {
      $.each($("#main-table tbody tr"), (index, row) => {
        let nums = [];
        $.each($(row).find("input"), (index, input) => {
          nums.push($(input).val());
        });

        const res = Math.max.apply(Math, nums); // Encuentro el máximo de la fila
        this.totals.push(res);

        $(row)
          .find("td:last-of-type")
          .html(res);

        this.result = Math.min.apply(Math, this.totals); // Saco el mínimo de todos los totales
      });
    },
    savageMax() {
      this.getColTotals();
      let newMatriz = [];
      const newMatrizMax = [];
      const MatrizMax = [];

      $.each(this.totalsCols, (index, value) => {
        const a = value.map((num) => {
          return this.totalMaxCol[index] - num;
        });
        newMatriz.push(a);
      });
      console.log("savageMax -> newMatriz", newMatriz);
      for (let i in newMatriz[0]) {
        const nums = newMatriz.map((val) => Number(val[i]));
        newMatrizMax.push(nums);

        const maxCol = Math.max.apply(
          Math,
          nums.filter((n) => !isNaN(n))
        ); // Encuentro el máximo de la columna
        console.log("savageMax -> maxCol", maxCol);
        MatrizMax.push(maxCol);
      }
      // console.log("savageMax -> newMatrizMax", newMatrizMax);
      // console.log("savageMax -> MatrizMax", MatrizMax);
      const min = Math.min.apply(
        Math,
        MatrizMax.filter((n) => !isNaN(n) && isFinite(n))
      ); // Encuentro el máximo de la columna
      const position = MatrizMax.indexOf(min) + 1;
      // console.log("savagMax -> this.totalsCols", this.totalsCols);
      console.log("savageMax -> min", min);
      this.result = "Según el criterio de Savage (Ganancia) la alternativa <b>" + String(position) + "</b> es la opción que debemos seguir. <br> Aplicando en la segunda matriz min-max el resultado es: <br>" + String(min) + "</b>";
    },
    savageMin() {
      this.getColTotals();
      let newMatriz = [];
      const newMatrizMin = [];
      const MatrizMin = [];

      $.each(this.totalsCols, (index, value) => {
        const a = value.map((num) => {
          return num - this.totalMinCol[index];
        });
        newMatriz.push(a);
      });
      console.log("savageMin -> newMatriz", newMatriz);
      for (let i in newMatriz[0]) {
        const nums = newMatriz.map((val) => Number(val[i]));
        newMatrizMin.push(nums);

        const maxCol = Math.max.apply(
          Math,
          nums.filter((n) => !isNaN(n))
        ); // Encuentro el máximo de la columna
        console.log("savageMin -> maxCol", maxCol);
        MatrizMin.push(maxCol);
      }
      console.log("savageMin -> newMatrizMin", newMatrizMin);
      console.log("savageMin -> MatrizMin", MatrizMin);
      const min = Math.min.apply(
        Math,
        MatrizMin.filter((n) => !isNaN(n) && isFinite(n))
      ); // Encuentro el máximo de la columna
      const position = MatrizMin.indexOf(min) + 1;
      // console.log("savagMax -> this.totalsCols", this.totalsCols);
      console.log("savageMin -> min", min);
      this.result = "Según el criterio de Savage (Perdida) la alternativa <b>" + String(position) + "</b> es la opción que debemos seguir. <br> Aplicando en la segunda matriz max-min el resultado es: <br>" + String(min) + "</b>";
    },
    laplace() {},
  },
};
</script>

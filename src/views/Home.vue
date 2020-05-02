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
							<th rowspan="2">
								Alternativas
							</th>
							<th :colspan="cols">
								Escenarios o estados
							</th>
							<th rowspan="2">Total</th>
						</tr>
						<tr>
							<th v-for="col in cols" :key="col">Escenario {{ col }}</th>
						</tr>
					</thead>

					<tbody>
						<tr v-for="row in rows" :key="row">
							<td class="font-weight-bold">Alternativa {{ row }}</td>
							<td v-for="col in cols" :key="col">
								<b-form-input type="number" trim placeholder="Ingresa valor" @input="generateResults()"></b-form-input>
							</td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>

      <b-col class="mx-auto mt-4 text-center border border-dark p-4" v-if="result" cols="11" md="4">
        <h4>Resultado: {{ result }}</h4>
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
				{ text: "Wald", value: "WALD", dscription: "Se asigna el peor de los escenarios y se escoge el mejor" },
				{ text: "Maximax", value: "MAXIMAX" },
				{ text: "Savage", value: "SAVAGE" },
				{ text: "Laplace", value: "LAPLACE" },
			],

			cols: "",
			rows: "",

			/* items: [{ name: "Modelo 1" }],
			fields: ["Modelo"], */
      result: undefined,
      totals : []
		};
	},
	methods: {
		generateResults() {
      this.totals = []
			switch (this.criteria) {
				case "WALD": {
					this.wald();
					break;
				}
				case "MAXIMAX": {
					this.maximax();
					break;
				}
			}
			/* this.models = this.models.replace(/\s/g, "");
			this.scenarios = this.scenarios.replace(/\s/g, "");

			this.cols = this.scenarios.split(",");
			this.rows = this.models.split(","); */
		},
		wald() {
			$.each($("#main-table tbody tr"), (index, row) => {
				let nums = [];
				$.each($(row).find("input"), (index, input) => {
					nums.push($(input).val());
        });
        const res = Math.min.apply(Math, nums) // Encuentro el mínimo de la fila
        this.totals.push(res)
				$(row)
					.find("td:last-of-type")
          .html(res);
          
        this.result = Math.max.apply(Math, this.totals) // Saco el máximo de todos los totales
      });
		},
		maximax() {
			$.each($("#main-table tbody tr"), (index, row) => {
				let nums = [];
				$.each($(row).find("input"), (index, input) => {
					nums.push($(input).val());
        });
        
        const res = Math.max.apply(Math, nums) // Encuentro el máximo de la fila
        this.totals.push(res)

				$(row)
					.find("td:last-of-type")
          .html(res);
          
        this.result = Math.min.apply(Math, this.totals) // Saco el mínimo de todos los totales
        
			});
    },
	},
};
</script>

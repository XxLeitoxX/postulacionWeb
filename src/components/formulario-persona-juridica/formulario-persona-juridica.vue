<template>
  <main class="pj-formulario-1">
    <!-- Formulario 1 -->
      <div class="container" style="margin-top: 15px;" v-if="pjform1">
        <div class="row">
          <!-- LEFT COLUMN -->
          <div class="col-md-6 col-xl-7">
            <h3 class="text-uppercase text-primary">Información de la empresa</h3>
            <div class="row">
              <div class="col-lg-7">
                <form class="info-empresa-form pb-4">
                  <label class="info-empresa-form__label text-small font-weight-bold" for="RUT">RUT*</label>
                  <input type="number" v-model="rut" id="rut" class="info-empresa-form__input form-control" required>
                  <p>{{rut}}</p>
                  <!--{{ $data }}-->
                  <!--<div v-if="!rutNoValido" class="alert alert-danger" role="alert">
                    <strong>Error!</strong> RUT no válido.
                  </div>-->
                  <p class="text-small font-weight-bold info-empresa-form__question">¿Con qué nombre quiere quedar en los
                    registros de la CChC?</p>
                  <label class="info-empresa-form__label info-empresa-form__label--razon-name text-small font-weight-bold"
                    for="Nombre">Nombre de
                    Fantasía</label>
                  <input type="text" v-model="fantasyName" id="name"
                    class="info-empresa-form__input info-empresa-form__input--razon-name form-control">
                  <label class="info-empresa-form__check-container">
                    <input type="checkbox" :disabled="disabledTwo" @click="disabled = !disabled" class="info-empresa-form__check">
                    <span class="info-empresa-form__check-style"></span>
                  </label>
                  
                  <label class="info-empresa-form__label info-empresa-form__label--razon-name text-small font-weight-bold"
                    for="Razón Social">Razón social*</label>
                  <input name="Razón Social" type="text" v-validate="'required'" v-model="razonSocial" id="razon"
                    class="info-empresa-form__input info-empresa-form__input--razon-name form-control" required>
                  <label class="info-empresa-form__check-container">
                    <input type="checkbox" :disabled="disabled" @click="disabledTwo = !disabledTwo" class="info-empresa-form__check">
                    <span class="info-empresa-form__check-style"></span>
                  </label>
                  <div class="invalid-feedback">
                    {{errors.first('razonSocial')}}
                  </div>
                  <label class="info-empresa-form__label text-small font-weight-bold" for="fechaConst">Fecha de
                    Constitución*</label>
                  <datepicker v-model="date" :disabled-dates="disabledDates" v-validate="'required'" :language="es"></datepicker>
                  <div class="invalid-feedback">
                    {{errors.first('date')}}
                  </div>
                  <label class="info-empresa-form__label text-small font-weight-bold" for="giro">Giro*</label>
                  <select name="Giro" id="giro" type="text" class="info-empresa-form__input form-control" v-model="giroModel" v-validate="'required'" >
                    <option value="" disabled>Seleccione un Giro</option>
                    <option v-for="(giroArray, key) in giros" :value="giroArray.giroId" :key="key">{{ giroArray.giro }}</option>
                  </select>
                  <div class="invalid-feedback">
                    {{errors.first('giro')}}
                  </div>
                  <label class="info-empresa-form__label text-small font-weight-bold" for="actividad">Actividad*</label>
                  <select name="Actividad" id="actividad" class="info-empresa-form__input form-control" required v-model="activity" v-validate="'required'">
                    <option value="" disabled>Seleccione una Actividad</option>
                    <option v-for="(actividad, key) in actividades" :value="actividad.ActividadId" :key="key">{{ actividad.actividad }}</option>
                  </select>
                  <div class="invalid-feedback">
                    {{errors.first('activity')}}
                  </div>
                  <label class="info-empresa-form__label text-small font-weight-bold" for="categoria">Categoría*</label>
                  <select name="Categoría" v-validate="'required'" v-model="category" id="categoria" class="info-empresa-form__input form-control" required>
                    <option value="" disabled>Seleccione una Categoría</option>
                    <option v-for="(categoria, key) in categorias" :value="categoria.categoriaId" :key="key">{{ categoria.categoria }}</option>
                  </select>
                  <div class="invalid-feedback">
                    {{errors.first('category')}}
                  </div>
                </form>

                <!--<form action="#" method="post" enctype="multipart/form-data">
                  <label>Select File</label>
                  <input type="file" name="fileToUpload" id="fileToUpload" v-validate="'required'"> <br> <br>
                  <input type="button" class="btn btn-primary upload" value="Subir">
                </form>

                <form action="#" method="post" enctype="multipart/form-data">
                  <label>Select File</label>
                  <input type="file" name="fileToUpload" id="fileToUpload" v-validate="'required'"> <br> <br>
                  <input type="button" class="btn btn-primary upload" value="Subir">
                </form>-->













              </div> <!-- col-lg-7 -->

              <div class="col-lg-5 d-flex flex-column">
                <div class="info-empresa__img-icon">
                  
                  <div class="info-empresa__icon-container">
                    <form>
                      <template v-if="!image">
                        <div class="info-empresa__img-container">
                          <img src="@/assets/images/empresa.png" alt="Logo empresa" class="img-fluid">
                        </div>
                        <label for="add-company"
                          class="text-small font-weight-bold d-flex align-items-center info-empresa__icon-container-label"><img style="height: 33px;" 
                            src="@/assets/images/mas.png" alt="Añadir logo"
                            class="img-fluid pr-1 btn--sibling-hover-right">
                          <span class="btn--hover-right">
                            Logo
                          </span>
                        </label>  
                        <input id="add-company" class="d-none images" type="file" ref="fileImage" accept="image/jpeg, image/png, image/jpg" @change="onFileChange">
                      </template>
                      <template v-else>
                        <img style="max-width: 100%;height: auto;" :src="image" />
                        <i @click="removeImage" style="color: red; height: 33px; cursor:pointer" class="fas fa-minus-circle"></i>
                      </template>
                    </form>
                  </div>
                </div>
                <form class="info-empresa-attachment__form d-flex flex-column align-items-center py-2">
                  <div>
                    <!--<input type="file" id="escritura" class="d-none" required>-->
                    <!-- Escritura constitución -->
                    <label for="escritura"
                      class="info-empresa-attachment__form-label text-small font-weight-bold py-1">
                      <img
                        src="@/assets/images/mas.png" alt="Adjuntar Escritura constitución" height="33px"
                        class="btn--sibling-hover-right">
                        <span class="btn--hover-right">
                          Escritura constitución*
                        </span>
                    </label>
                    <div class="invalid-feedback">
                      {{errors.first('selectedFile')}}
                    </div>
                    <template v-if="selectedFile.length == 0">
                      <input type="file" v-validate="'required'" id="escritura" ref="file" class="d-none" required @change="onFileSelected">
                      
                      <!--<select>
                        <option v-for="(file, key) in selectedFile " :value="selectedFile" :key="key">{{ file.name }}</option>
                      </select>-->
                      
                      <!--<button @click="onUpload">Upload!</button>
                      {{this.selectedFile[0].name}}-->
                    </template>
                    <template v-else>

                      <div class="alert alert-danger alert-dismissible" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <strong>Error!</strong> 
                      </div>
                      <span v-for="(file, key) in selectedFile" :value="selectedFile" :key="key">
                        Archivo seleccionado: {{ file.name }}
                        <i @click="removeFile" style="color: red; max-width: 100%; cursor:pointer" class="fas fa-minus-circle"></i>
                      </span>
                      
                      <!--<button @click="onUpload">Upload!</button>-->
                    </template>


                    <!-- Transformaciones y modificaciones -->
                    <label for="modificaciones"
                      class="info-empresa-attachment__form-label text-small font-weight-bold py-1"><img
                        src="@/assets/images/mas.png" alt="Adjuntar Transformaciones y modificaciones" height="33px"
                        class="btn--sibling-hover-right">
                      <span class="btn--hover-right">Transformaciones y modificaciones (max 10 adjuntos)
                      </span>
                    </label>
                    <template v-if="selectedFileTM.length == 0">
                      <input type="file" id="modificaciones" ref="filetm" class="d-none" multiple required @change="onFileSelectedTM($event)">
                    </template>
                    <template v-else>
                      <input type="file" id="modificaciones" class="d-none" multiple required @change="onFileSelectedTM">
                      <span v-for="(file, key) in selectedFileTM " :value="selectedFileTM" :key="'`A-${key}'">
                        Archivo seleccionado: {{ file.name }}
                      <i @click="removeFileTM(key)" style="color: red; width: 15px; cursor:pointer" class="fas fa-minus-circle"></i>
                      </span>
                    </template>

                    <!-- Memoria o CV de la empresa -->
                    <!--<input type="file" id="cvEmpresa" class="d-none" required>-->
                    <label for="cvEmpresa"
                      class="info-empresa-attachment__form-label text-small font-weight-bold py-1"><img
                        src="@/assets/images/mas.png" alt="Adjuntar Memoria o CV de la empresa" height="33px"
                        class="btn--sibling-hover-right">
                      <span class="btn--hover-right">Memoria o CV de la empresa*</span>
                    </label>
                    <template v-if="selectedFileCV.length == 0">
                      <input type="file" v-validate="'required'" ref="filecv" id="cvEmpresa" class="d-none" accept=".jpg, .jpeg, .png, .pdf, application/pdf, .doc, .docx, .xml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      required @change="onFileSelectedCV">
                    </template>
                    <template v-else>
                      <span v-for="(file, key) in selectedFileCV" :value="selectedFileCV" :key="'B-${key}'">
                      Archivo seleccionado: {{ file.name }}
                    </span>
                    <i @click="removeFileCV" style="color: red; max-width: 100%; cursor:pointer" class="fas fa-minus-circle"></i>
                    </template>
                      
                    <!-- -->
                    <!--<input type="file" id="escritura-social-srl" class="d-none" required>-->
                    <label for="escritura-social-srl"
                      class="info-empresa-attachment__form-label text-small font-weight-bold py-1">
                      <img
                        src="@/assets/images/mas.png" alt="Adjuntar Escritura social" height="33px"
                        class="btn--sibling-hover-right">
                      <span class="btn--hover-right">
                        Escritura social (S.R.L.)
                      </span>
                    </label>
                    <template v-if="selectedFileSRL.length == 0">
                      <input type="file" id="escritura-social-srl" ref="filesrl" class="d-none" accept=".jpg, .jpeg, .png, .pdf, application/pdf, .doc, .docx, .xml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document" required @change="onFileSelectedSRL">
                    </template>
                    <template v-else>
                      <span v-for="(file, key) in selectedFileSRL" :value="selectedFileSRL" :key="'C-${key}'">
                      Archivo seleccionado: {{ file.name }}
                      </span>
                      <i @click="removeFileSRL" style="color: red; max-width: 100%; cursor:pointer" class="fas fa-minus-circle"></i>
                    </template>

                    <!-- Escritura social (S.A.) -->
                    <!--<input type="file" id="escritura-social-sa" class="d-none" required>-->
                    <label for="escritura-social-sa"
                      class="info-empresa-attachment__form-label text-small font-weight-bold py-1"><img
                        src="@/assets/images/mas.png" alt="Adjuntar Escritura social" height="33px"
                        class="btn--sibling-hover-right">
                        <span class="btn--hover-right">Escritura
                        social (S.A.)
                      </span>
                    </label>
                    <template v-if="selectedFileSA.length == 0">
                      <input type="file" id="escritura-social-sa" ref="filesa" class="d-none" accept=".jpg, .jpeg, .png, .pdf, application/pdf, .doc, .docx, .xml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document" required @change="onFileSelectedSA">
                    </template>
                    <template v-else>
                        <span v-for="(file, key) in selectedFileSA" :value="selectedFileSA" :key="'D-${key}'">
                      Archivo seleccionado: {{ file.name }}
                      </span>
                      <i @click="removeFileSA" style="color: red; max-width: 100%; cursor:pointer" class="fas fa-minus-circle"></i>
                    </template>
                      
                  </div>
                </form>
                
              </div> <!-- col-lg-5 -->
            </div> <!-- row -->
          </div> <!-- col-md-6 -->

          <!-- RIGHT COLUMN -->
          <div class="col-md-6 col-xl-5">
            <h3 class="text-primary text-uppercase text-primary informacion-contacto">Dirección comercial</h3>
            <form class="direccion3">


                  <label class="text-small font-weight-bold direccion3__label direccion3__label--left"
                  for="calle">Calle*</label>
                  <input name="Calle" type="text" v-validate="'required'" v-model="calle" id="calle" class="direccion3__input direccion3__input--left-big form-control" required>

              <label class="text-small font-weight-bold direccion3__label direccion3__label--left"
                for="numero">Número*</label>
              <input name="Número" type="number" v-validate="'required'" v-model="numero" id="numero" class="direccion3__input direccion3__input--left form-control" required>
              <label class="text-small font-weight-bold direccion3__label direccion3__label--right"
                for="oficina">Oficina</label>
              <input type="text" v-model="oficina" id="oficina" class="direccion3__input direccion3__input--right form-control">
              <label class="text-small font-weight-bold direccion3__label direccion3__label--left"
                for="continuacion">Continuación</label>
              <input type="text" v-model="continuacion" id="continuacion" class="direccion3__input direccion3__input--left form-control">
              <label class="text-small font-weight-bold direccion3__label direccion3__label--left"
                for="pais">País</label>
              <input type="text" class="direccion3__input direccion3__input--left form-control"
                disabled placeholder="Chile" value="Chile">
              <label class="text-small font-weight-bold direccion3__label direccion3__label--right"
                for="region">Región*</label>
              <select 
                type="text"
                name="Región" 
                v-validate="'required'" 
                v-model="regionSeleccionada" 
                @change="getListadoProvincia" 
                id="region" 
                class="direccion3__input direccion3__input--right form-control"
                required>
                  <option 
                    v-for="(regionUno, key) in listadoRegiones" :value="regionUno.regionId" :key="key">
                    {{ regionUno.region }}
                  </option>
              </select>

              <label class="text-small font-weight-bold direccion3__label direccion3__label--left"
                for="provincia">Provincia*</label>
              <select 
                v-validate="'required'"
                name="Provincia" 
                v-model="provinciaSeleccionada" 
                @change="getListadoComuna" 
                type="text" 
                id="provincia" 
                class="ddireccion3__input direccion3__input--left form-control"
                required>
                <option 
                  v-for="(provincia, key) in provincias" 
                  :value="provincia.provinciaId" 
                  :key="key">
                  {{ provincia.provincia }}
                </option>
              </select>
              <label class="text-small font-weight-bold direccion3__label direccion3__label--right"
                for="comuna">Comuna*</label>
              <select 
                type="text" 
                name="Comuna" 
                v-validate="'required'" 
                v-model="comunaSeleccionada" 
                id="comuna" 
                class="direccion3__input direccion3__input--right form-control"
                required>
                <option 
                  v-for="(comuna, key) in comunas" 
                  :value="comuna.comunaId" 
                  :key="key">
                  {{ comuna.comuna }}
                </option>
              </select>

                <span 
                style="" v-for="(inputTel,k) in inputsTel" :key="k">
                <label class="text-small font-weight-bold direccion3__label direccion3__label--left" for="telefono1">Teléfonos</label>
                <input type="tel" id="telefono1" class="direccion3__input direccion3__input--tel direccion3__input--left form-control" v-model="telefonosArray[k]" required>
                <button 
                  class="btn--direccion1-tel btn--hover-up" 
                  @click="addTel()">
                  <img src="@/assets/images/mas.png"
                  alt="Añadir teléfono" class="img-fluid">
                </button>
                <i class="fas fa-minus-circle delete-input cursor" @click="removeTel(k)" v-show="k || ( !k && inputsTel.length > 1)" ></i>
                </span>
                <span v-for="(inputEmail,j) in inputsEmail" :key="j+10">
                  <label
                    class="text-small font-weight-bold direccion3__label direccion3__label--mail direccion3__label--r ight "
                    for="mail">Emails</label>
                  <input type="email" id="mail" v-model="emailsArray[j]"
                    class="direccion3__input direccion3__input--mail direccion3__input--right form-control" required>
                  <button class="btn--direccion3-mail btn--hover-up" @click="addEmail()"><img src="@/assets/images/mas.png"
                      alt="Añadir email" height="33px"></button>
                  <i class="fas fa-minus-circle delete-input cursor" @click="removeEmail(j)" v-show="j || ( !j && inputsEmail.length > 1)"></i>
                </span>
            </form>
            <h3 class="text-uppercase text-primary redes-digitales__title pt-5">Redes digitales de la empresa</h3>
            <form class="redes-digitales__form">
              <label for="sitio-web" class="text-small font-weight-bold">Sitio web</label>
              <input type="url" id="sitio-web" class="form-control">
            </form>

          </div> <!-- col-md-6 -->
        </div> <!-- row -->
        <div v-show="errors.all().length" class="alert alert-danger">
          <ul>
              <li v-for="(error, i) in errors.all()">{{error}}</li>
          </ul>
        </div>
        <div class="creacion-solicitud__buttons py-5">
          <button @click="guardar" class="btn btn-danger btn--big m-2 upload">Guardar y cerrar</button>
          <button class="btn btn-primary btn--big m-2" @click="siguiente">Siguiente <i
              class="fas fa-long-arrow-alt-right fa-lg"></i></button>
        </div>
      </div> <!-- container -->























      <!-- Formulario 2 -->
      
      <div class="container" v-if="pjform2 == true">
        <div class="row" >

          <!-- LEFT COLUMN -->
          <div class="col-md-8 col-lg-6 formulario-3__left-column">

            <h3 class="text-primary text-uppercase py-3 m-0">Información trabajadores</h3>
            <form class="d-grid info-trabajadores__form">
              <label class="info-trabajadores__label--left text-small font-weight-bold" for="nro-prof">N° de
                Profesionales</label>
              <input type="number" v-model="profesionales" id="nro-prof" class="info-trabajadores__input--left form-control">
              <label class="info-trabajadores__label--right info-trabajadores__label--right-1 text-small font-weight-bold"
                for="nro-tec">N° de Técnicos</label>
              <input type="number" v-model="tecnicos" id="nro-tec" class="info-trabajadores__input--right form-control">
              <label class="info-trabajadores__label--left text-small font-weight-bold" for="nro-adm">N° de
                Administrativos</label>
              <input type="number" v-model="administrativos" id="nro-adm"  class="info-trabajadores__input--left form-control">
              <label class="info-trabajadores__label--right info-trabajadores__label--right-2 text-small font-weight-bold"
                for="nro-trab">N° Total de Trabajadores</label>
              <input type="number" :value="parseInt(tecnicos)+parseInt(profesionales)+parseInt(administrativos)" id="nro-trab" class="info-trabajadores__input--right form-control" disabled>
            </form>

            <h3 class="text-primary text-uppercase py-3">Información comercial</h3>
            <form class="d-grid info-comercial-top__form info-comercial-top__form--pjuridica">
              <label class="info-comercial-top__label text-small  font-weight-bold" for="facturacion">Rango de Facturación según ventas anuales</label>
              <select id="facturacion" v-model="rangos" class="info-comercia-top__input form-control">
                <option value="1">0 a 2.400UF anuales</option>
                <option value="2">2.401 a 25.000UF anuales</option>
                <option value="3">25.001 a 100.000UF anuales</option>
                <option value="4">100.000 a 1.000.000UF anuales y más</option>
              </select>
              <div class="info-comercial-attachment info-comercial-attachment__top">
                <input type="file" id="ult-estados" v-validate="'required'" class="d-none" required>
                <label for="ult-estados" class="text-small font-weight-bold pt-2 info-comercial-attachment__label"><img src="@/assets/images/mas.png"
                    alt="Adjuntar últimos estados financieros" height="33px" class="btn--sibling-hover-right"> <span
                    class="btn--hover-right">Últimos estados financieros: Balance y estado de resultados*</span></label>
              </div>
              <div class="info-comercial-attachment info-comercial-attachment__top">
                <input type="file" id="estado-renta" v-validate="'required'" class="d-none" required>
                <label for="estado-renta" class="text-small font-weight-bold pt-2 info-comercial-attachment__label"><img src="@/assets/images/mas.png"
                    alt="Adjuntar Declaración Estado a la Renta" height="33px" class="btn--sibling-hover-right"> <span
                    class="btn--hover-right">Declaración Impuesto a la Renta*</span></label>
              </div>
            </form>

            <form class="info-comercial-bottom__form pt-4 pb-3">
              <label class="info-comercial-bottom__label text-small font-weight-bold" for="monto-pat">Patrimonio según último balance o Capital Inicial para empresas < 1 año*</label>
              <input type="number" id="monto-pat" v-validate="'required'" class="info-comercial-bottom__input form-control" required>
              <!--<label class="info-comercial-bottom__label info-comercial-bottom__label--right text-small font-weight-bold" for="para-construccion">% Dedicado a la Construcción*</label>
              <input type="number" id="para-construccion" class="info-comercial-bottom__input info-comercial-bottom__input--right form-control" required>-->
              <div class="info-comercial-attachment info-comercial-attachment__bottom">
                <input type="file" v-validate="'required'" id="capital-propio" class="d-none" required>
                <label for="capital-propio" class="text-small font-weight-bold pt-2"><img src="@/assets/images/mas.png"
                    alt="Adjuntar declaración de capital propio" height="33px" class="btn--sibling-hover-right">
                  <span class="btn--hover-right">Declaración de capital propio*</span></label>
              </div>
              <div class="info-comercial-attachment info-comercial-attachment__bottom">
                <input type="file" v-validate="'required'" id="facturacion-ant" class="d-none" required>
                <label for="facturacion-ant" class="text-small font-weight-bold pt-2"><img src="@/assets/images/mas.png"
                    alt="Adjuntar Facturación años anteriores" height="33px" class="btn--sibling-hover-right">
                  <span class="btn--hover-right">Facturación años anteriores*</span></label>
              </div>
              <label class="info-comercial-bottom__label text-small font-weight-bold" for="fact-ant">Volumen facturado año anterior*</label>
              <input type="number" id="fact-ant" v-validate="'required'" v-model="volumenFacturado" class="info-comercial-bottom__input info-comercial-bottom__input--vol-fact form-control" required>
              <span class="text-small font-weight-bold">UF</span>
            </form>
          </div> <!-- col-md-6 -->

          <!-- RIGHT COLUMN -->
          <div class="col-md-4 col-lg-6 right-column">
          </div> <!-- col-md-6 -->
        </div> <!-- row -->

        <div class="creacion-solicitud__buttons py-5">
          <button @click="guardar" class="btn btn-danger btn--big m-2">Guardar y cerrar</button>
          <button @click="form1" class="btn btn-primary btn--big m-2"><i
              class="fas fa-long-arrow-alt-left fa-lg"></i> Anterior</button>
          <button @click="siguiente2" class="btn btn-primary btn--big m-2">Siguiente <i
              class="fas fa-long-arrow-alt-right fa-lg"></i></button>
        </div> <!-- creacion-solicitud__buttons -->
      </div>













      <!-- Formulario 3 -->
      <div class="container" v-show="pjform3 == true">
        <div class="row">

          <!-- LEFT COLUMN -->
        <div class="col-md-7 col-lg-6">
          <h3 class="text-primary text-uppercase font-weight-bold">Composición accionaria</h3>
         <!--<form action="">
            <div class="form-group">
              <div class="row">
               

                <div class="col-lg-4">
                  <label for="rut" class="accionarios-participacion__label text-small font-weight-bold">RUT</label>
                  <input v-model="rutComp" id="rut" :disabled="disabled == 1" type="text" class="form-control">
                </div>

                <div class="col-lg-4">
                  <label for="porcentaje"
                  class="accionarios-participacion__label text-small 
                  font-weight-bold">Porcentaje</label>
                  <input v-model="porcentaje" ref="porcentaje" 
                  id="porcentaje" type="number" 
                  class="form-control accionarios-participacion__input">
                </div>

                <div class="col-lg-4" style="padding-left:0%;">
                <button type="button" 
                class="btn--accionarios-participacion btn--hover-up" 
                @click="buscar" style="margin-top:13%;"><img src="@/assets/images/mas.png"
                alt="Adjuntar declaración de impuestos a la renta" 
                height="33px"></button>
                </div>

              </div>
            </div>
          </form>-->
          <form class="accionarios-participacion__form accionarios-participacion__form--pnatural">
            <label for="rut" class="accionarios-participacion__label text-small font-weight-bold">RUT</label>
            <input v-model="rutComp" id="rut" :disabled="disabled == 1" type="text" class="form-control accionarios-participacion__input">
            <label for="name" class="accionarios-participacion__label text-small font-weight-bold">Razón social</label>
            <input v-model="razonSocial" id="name" :disabled="disabled == 1" type="text" class="form-control accionarios-participacion__input" readonly>
            <label for="porcentaje"
              class="accionarios-participacion__label text-small font-weight-bold">Porcentaje</label>
            <input v-model="porcentaje" ref="porcentaje" id="porcentaje" type="number" class="form-control accionarios-participacion__input">
            <button type="button" class="btn--accionarios-participacion btn--hover-up" @click="buscar"><img src="@/assets/images/mas.png"
                alt="Adjuntar declaración de impuestos a la renta" height="33px"></button>
          </form>

          <div class="table-responsive pt-3">
            <table class="table table-sm table--blue-border">
              <thead class="bg-primary text-white">
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">RUT</th>
                  <th scope="col">Porcentaje</th>
                  <th scope="col"> </th>
                </tr>
              </thead>
            <tbody v-for="(com, indice) in composicion" :key='indice'>
                <tr>
                  <td> {{com.nombre}} </td>
                  <td>{{ com.rutComp }}-{{ com.dvComp }}</td>
                  <td>{{ com.porcentaje }}%</td>
                  <td><a @click="editarPorcentaje(indice)"><i class="fas fa-pencil-alt icon-edit"></i></a> <a @click="eliminarComposicion(indice)"><i class="fas fa-times-circle icon-delete"></i></a>
                  </td>
                 <!-- <td v-if="!com.editing">{{ com.porcentaje }}%</td>-->
                 <!-- <td v-else style="text-align: center; width: 1%;"><input type="number" @keyup.enter="updateComposicion(indice)" v-model="porcentaje" class="edit-composicion">%</td>-->
                  <!--<td><a @click="editarPorcentaje(indice)"><i class="fas fa-pencil-alt icon-edit"></i></a> <a @click="eliminarComposicion(indice)"><i class="fas fa-times-circle icon-delete"></i></a>
                  </td>-->
                </tr> 
            <!--  <tbody v-for="item in searchGente">
              <tr>
                  <td> {{ item.nombre }} </td>
                  <td>{{ item.rut }}</td>
                  <td>{{ item.porcentaje }}%</td>
                  <td><i class="fas fa-pencil-alt icon-edit"></i> <i class="fas fa-times-circle icon-delete"></i>
                  </td>
                </tr>  -->
              <!--  <tr>
                  <td>Carlos Vandal</td>
                  <td>12.345.689-k</td>
                  <td>50%</td>
                  <td><i class="fas fa-pencil-alt icon-edit"></i> <i class="fas fa-times-circle icon-delete"></i>
                  </td>
                </tr> 
                <tr>
                  <td>Carlos Vandal</td>
                  <td>12.345.689-k</td>
                  <td>30%</td>
                  <td><i class="fas fa-pencil-alt icon-edit"></i> <i class="fas fa-times-circle icon-delete"></i>
                  </td>
                </tr>
                <tr>
                  <td>Carlos Vandal</td>
                  <td>12.345.689-k</td>
                  <td>20%</td>
                  <td><i class="fas fa-pencil-alt icon-edit"></i> <i class="fas fa-times-circle icon-delete"></i>
                  </td>
                </tr> -->
              </tbody>
            </table>
          </div>
        </div> <!-- col-md-6 -->

        <!-- RIGHT COLUMN -->
        <div class="col-md-5 col-lg-6">
          <div class="container">

            <div>
            <b-modal ref="modal-crear" hide-footer title="Crear Persona">
              <div class="d-block text-center">
                <h3 style="padding:5%;">La persona no existe ¿Desea crearlo?</h3>
              </div>
              <div class="d-block text-center">
                <b-button size="sm" variant="primary" @click="aceptarCreacion()">Si</b-button>
                <b-button size="sm" variant="danger" @click="cancelarCreacion()">No</b-button></div>
            </b-modal>
            </div>

            <div>
            <b-modal ref="modal-editar" hide-footer title="Editar Porcentaje">
              <div class="d-block text-center">
                <h3 style="padding:5%;">¿Seguro que desea editar el porcentaje con el RUT {{ rutComp }}</h3>
              </div>
              <div class="d-block text-center">
                <b-button size="sm" variant="primary" @click="aceptarEdicion()">Si</b-button>
                <b-button size="sm" variant="danger" @click="cancelarEdicion()">No</b-button></div>
            </b-modal>
            </div>

            <div>
            <b-modal ref="modal-eliminar" hide-footer title="Eliminar Persona">
              <div class="d-block text-center">
                <h3 style="padding:5%;">¿Seguro que desea eliminar a la persona con el RUT {{ rutComp }}?</h3>
              </div>
              <div class="d-block text-center">
                <b-button size="sm" variant="primary" @click="aceptarEliminacion()">Si</b-button>
                <b-button size="sm" variant="danger" @click="cancelarEliminacion()">No</b-button></div>
            </b-modal>
            </div>
<form v-if="formRegistrarPersona">
  <div class="row">
    <div class="col">
      <label class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold" for="nombre">Nombre</label>
      <input type="text" class="form-control" placeholder="">
    </div>
    <div class="col">
      <label class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold" for="nombre">RUT</label>
      <input type="text" class="form-control" placeholder="">
    </div>
    </div>
    <div class="row">
    <div class="col">
      <label class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold" for="porcentaje">Porcentaje</label>
      <input type="text" class="form-control" placeholder="">
    </div>
    <div class="col">
      <label class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold" for="social">Razón Social</label>
      <input type="text" class="form-control" placeholder="">
    </div>
    </div>
  <button type="submit" class="btn btn-primary" style="float:right; padding: 2% 5% 2% 5%; margin-top: 2%;">Crear</button>
</form>
              <!--<form class="personas-asociadas" v-if="formRegistrarPersona">
                  <div class="personas-asociadas-form">
                    <label
                      class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                      for="rut">RUT*</label>
                    <input type="number" id="rut" class="personas-asociadas-form__input--left form-control" required>
                    <label
                      class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                      for="vocativo">Nombres</label>
                      <input type="text" id="nombres" class="personas-asociadas-form__input--right-big  form-control">
                    <label
                      class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                      for="porcentaje">Porcentaje</label>
                    <input type="number" id="porcentaje" class="personas-asociadas-form__input--left-big  form-control">
                    <label
                      class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                      for="razon-social">Razón Social</label>
                    <input type="text" id="razon-social"
                      class="personas-asociadas-form__input--right-big  form-control">
                  
                   
                  </div>
                </form>-->
          </div>
        </div> <!-- col-md-6 -->
      </div> <!-- row -->

        <div class="creacion-solicitud__buttons py-5 mt-5">
          <a href="ingreso-y-consulta.html" @click="guardar" class="btn btn-danger btn--big m-2">Guardar y cerrar</a>
          <button @click="form2" class="btn btn-primary btn--big m-2"><i
              class="fas fa-long-arrow-alt-left fa-lg"></i> Anterior</button>
          <button class="btn btn-primary btn--big m-2 upload" @click="siguiente3">Siguiente <i
              class="fas fa-long-arrow-alt-right fa-lg"></i></button>
        </div> <!-- creacion-solicitud__buttons -->
      </div> <!-- container -->










      <!-- Formulario 4 -->
      <div class="container" v-show="pjform4 == true">
        <div class="row">

          <!-- LEFT COLUMN -->
          <div class="col-lg-6">
            <h3 class="text-primary text-uppercase font-weight-bold">Representante ante la CCHC</h3>
            <form class="accionarios-participacion__form">
              <label for="rut" class="accionarios-participacion__label text-small font-weight-bold">RUT</label>
              <input id="rut" type="number" class="form-control accionarios-participacion__input">
              <label for="name" class="accionarios-participacion__label text-small font-weight-bold">Nombre</label>
              <input id="name" type="text" class="form-control accionarios-participacion__input">
              <button id="agregarDatosRepCchc"
                class="btn--accionarios-participacion btn--accionarios-participacion-repcchc btn--hover-up"><img
                  src="@/assets/images/mas.png" alt="Adjuntar declaración de impuestos a la renta" height="33px"></button>
            </form>
            <h3 class="text-primary text-uppercase font-weight-bold pt-3">Contacto Cobranza</h3>
            <form class="accionarios-participacion__form">
              <label for="rut" class="accionarios-participacion__label text-small font-weight-bold">RUT</label>
              <input id="rut" type="number" class="form-control accionarios-participacion__input">
              <label for="name" class="accionarios-participacion__label text-small font-weight-bold">Nombre</label>
              <input id="name" type="text" class="form-control accionarios-participacion__input">
              <button id="agregarDatosContCobranza"
                class="btn--accionarios-participacion btn--accionarios-participacion-repcchc btn--hover-up"><img
                  src="@/assets/images/mas.png" alt="Adjuntar declaración de impuestos a la renta" height="33px"></button>
            </form>
            <!-- <div class="container-fluid">
              <div class="row">
                <div class="col-sm-5 col-md-12 col-xl-5">
                  <form>
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="representante1">
                      <label class="custom-control-label text-small pt-1" for="representante1">Representante ante la
                        CCHC</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="representante2">
                      <label class="custom-control-label text-small pt-1" for="representante2">Representante Legal</label>
                    </div>
                  </form>
                </div>
                <div class="col-sm-4 col-md-12 col-xl-4">
                  <form>
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="contacto1">
                      <label class="custom-control-label text-small pt-1" for="contacto1">Contacto Cobranza</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="contacto2">
                      <label class="custom-control-label text-small pt-1" for="contacto2">Contacto Socio</label>
                    </div>
                  </form>
                </div>
                <div class="col-sm-3 col-md-12 col-xl-3">
                  <form>
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="contacto3">
                      <label class="custom-control-label text-small pt-1" for="contacto3">Contacto RRHH</label>
                    </div>
                  </form>
                </div>
              </div>
            </div> -->

            <!-- COMITES -->
            <!-- <p class="text-small text-primary font-weight-bold pt-4 pb-2">Seleccione el o los comités en que desea
              inscribirse:</p>
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-5 col-md-12 col-xl-5">
                  <p class="text-uppercase">Infraestructura</p>
                  <form>
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="contratistas-gen">
                      <label class="custom-control-label text-small pt-1" for="contratistas-gen">Contratistas
                        Generales</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="infraest-publica">
                      <label class="custom-control-label text-small pt-1" for="infraest-publica">Obras Infraestructura
                        Pública</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="concesiones">
                      <label class="custom-control-label text-small pt-1" for="concesiones">Concesiones</label>
                    </div>
                  </form>
                </div>
                <div class="col-sm-4 col-md-12 col-xl-4">
                  <p class="text-uppercase">Vivienda</p>
                  <form>
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="inmobiliario">
                      <label class="custom-control-label text-small pt-1" for="inmobiliario">Inmobiliario</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="vivienda">
                      <label class="custom-control-label text-small pt-1" for="vivienda">Vivienda</label>
                    </div>
                  </form>
                </div>
                <div class="col-sm-3 col-md-12 col-xl-3">
                  <p class="text-uppercase">Suministros</p>
                  <form>
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="proveedores">
                      <label class="custom-control-label text-small pt-1" for="proveedores">Proveedores</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="industriales">
                      <label class="custom-control-label text-small pt-1" for="industriales">Industriales</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="especialidades">
                      <label class="custom-control-label text-small pt-1" for="especialidades">Especialidades</label>
                    </div>
                  </form>
                </div>
              </div>
            </div> -->

            <div class="table-responsive pt-3">
              <table class="table table-sm table--blue-border">
                <thead class="bg-primary text-white">
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">RUT</th>
                    <th scope="col">Rol</th>
                    <th scope="col"> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Carlos Vandal</td>
                    <td>12.345.689-k</td>
                    <td>Representante CCHC</td>
                    <td><i class="fas fa-pencil-alt icon-edit"></i> <i class="fas fa-times-circle icon-delete"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Carlos Vandal</td>
                    <td>12.345.689-k</td>
                    <td>Contacto Cobranza</td>
                    <td><i class="fas fa-pencil-alt icon-edit"></i> <i class="fas fa-times-circle icon-delete"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Carlos Vandal</td>
                    <td>12.345.689-k</td>
                    <td>Contacto Cobranza</td>
                    <td><i class="fas fa-pencil-alt icon-edit"></i> <i class="fas fa-times-circle icon-delete"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> <!-- col-md-6 -->

          <!-- RIGHT COLUMN -->
          <div class="col-lg-6">
            <div id="carousel-repcchc" class="carousel slide pb-3 d-none" data-interval="false" data-wrap="false"
              data-touch="false">
              <h3 class="text-primary text-uppercase font-weight-bold">Datos Representante CCHC</h3>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <form class="personas-asociadas">
                    <div class="personas-asociadas-form">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                        for="rut">RUT*</label>
                      <input type="number" id="rut" class="personas-asociadas-form__input--left form-control" required>
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                        for="vocativo">Vocativo</label>
                      <select type="text" id="vocativo"
                        class="personas-asociadas-form__input--right-big form-control"></select>
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                        for="nombres">Nombres</label>
                      <input type="text" id="nombres" class="personas-asociadas-form__input--left-big  form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                        for="apellido-pat">Apellido Paterno</label>
                      <input type="text" id="apellido-pat"
                        class="personas-asociadas-form__input--right-big  form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                        for="apellido-mat">Apellido Materno</label>
                      <input type="text" id="apellido-mat" class="personas-asociadas-form__input--left  form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                        for="email">Email</label>
                      <input type="email" id="email" class="personas-asociadas-form__input--right form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                        for="telefono">Teléfono</label>
                      <input type="tel" id="telefono" class="personas-asociadas-form__input--left form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                        for="fecha-nacimiento">Fecha
                        nacimiento</label>
                      <input type="date" id="fecha-nacimiento" class="personas-asociadas-form__input--right form-control">
                    </div>
                    <p class="text-center font-weight-bold pt-3">1 / 4</p>
                  </form>
                </div>
                <div class="carousel-item">
                  <form class="personas-asociadas">
                    <div class="personas-asociadas-form">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                        for="nacionalidad">Nacionalidad</label>
                      <input type="text" id="nacionalidad"
                        class="personas-asociadas-form__input--left datos-personales__input-nacionalidad form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right datos-personales__pasaporte-label invisible text-small font-weight-bold"
                        for="pasaporte">N° Pasaporte</label>
                      <input type="number" id="pasaporte"
                        class="personas-asociadas-form__input--right datos-personales__pasaporte-input invisible form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                        for="sexo">Sexo</label>
                      <select id="sexo" class="personas-asociadas-form__input--left form-control">
                        <option value="1">Femenino</option>
                        <option value="2">Masculino</option>
                      </select>
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                        for="edoCivil">Estado civil</label>
                      <select id="edoCivil" class="personas-asociadas-form__input--right form-control">
                        <option value="1">Soltero/a</option>
                        <option value="2">Casado/a</option>
                        <option value="3">Viudo/a</option>
                        <option value="4">Divorciado/a</option>
                        <option value="4">Separado/a</option>
                      </select>
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                        for="nivelDeEstudios">Nivel de
                        estudios</label>
                      <input type="text" id="nivelDeEstudios" class="personas-asociadas-form__input--left form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                        for="profesion">Profesión</label>
                      <select type="text" id="profesion"
                        class="personas-asociadas-form__input--right form-control"></select>
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                        for="centroDeEstudios">Casa de
                        estudios</label>
                      <input type="text" id="centroDeEstudios" class="personas-asociadas-form__input--left form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                        for="cargoEmpresa">Cargo en la
                        empresa</label>
                      <input type="text" id="cargoEmpresa" class="personas-asociadas-form__input--right form-control">
                    </div>
                    <p class="text-center font-weight-bold pt-3">2 / 4</p>
                  </form>
                </div>
                <div class="carousel-item">
                  <form class="personas-asociadas">
                    <div class="direccion2 pt-2">
                      <label class="direccion2__label direccion2__label--left text-small font-weight-bold"
                        for="direccion">Dirección Particular</label>
                      <input type="text" id="direccion" class="direccion2__input--left-big form-control">
                      <label class="direccion2__label direccion2__label--smaller1 text-small font-weight-bold"
                        for="numero-dir">Número</label>
                      <input type="number" id="numero-dir" class="direccion2__input--smaller1 form-control">
                      <label class="direccion2__label direccion2__label--smaller2 text-small font-weight-bold"
                        for="numero-dpto">Depto</label>
                      <input type="number" id="numero-dpto" class="direccion2__input--smaller2 form-control">
                      <label class="direccion2__label direccion2__label--left text-small font-weight-bold"
                        for="pais">País</label>
                      <input type="text" id="pais" class="direccion2__input--left form-control" placeholder="Chile"
                        value="Chile" disabled>
                      <label class="direccion2__label direccion2__label--right text-small font-weight-bold"
                        for="provincia">Provincia</label>
                      <select type="text" id="provincia" class="direccion2__input--right form-control"></select>
                      <label class="direccion2__label direccion2__label--left text-small font-weight-bold"
                        for="region">Región</label>
                      <select type="text" id="region" class="direccion2__input--left form-control"></select>
                      <label class="direccion2__label direccion2__label--right text-small font-weight-bold"
                        for="comuna">Comuna</label>
                      <select type="text" id="comuna" class="direccion2__input--right form-control"></select>
                      <div class="custom-control custom-checkbox direccion2-check direccion2-check--left">
                        <input type="checkbox" class="custom-control-input" id="direccion1">
                        <label class="custom-control-label text-small pt-1" for="direccion1">Usar dirección para
                          correspondencia</label>
                      </div>
                      <div class="custom-control custom-checkbox direccion2-check direccion2-check--right">
                        <input type="checkbox" class="custom-control-input" id="direccion2">
                        <label class="custom-control-label text-small pt-1" for="direccion2">Usar dirección para
                          cobranzas</label>
                      </div>
                    </div>
                    <p class="text-center font-weight-bold pt-3">3 / 4</p>
                  </form>
                </div>
                <div class="carousel-item">
                  <p class="text-small text-primary font-weight-bold pt-4 pb-2">Seleccione el o los comités en que desea
                    inscribirse:</p>
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-sm-5">
                        <p class="text-uppercase">Infraestructura</p>
                        <form>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="contratistas-gen">
                            <label class="custom-control-label text-small pt-1" for="contratistas-gen">Contratistas
                              Generales</label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="infraest-publica">
                            <label class="custom-control-label text-small pt-1" for="infraest-publica">Obras
                              Infraestructura
                              Pública</label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="concesiones">
                            <label class="custom-control-label text-small pt-1" for="concesiones">Concesiones</label>
                          </div>
                        </form>
                      </div>
                      <div class="col-sm-4">
                        <p class="text-uppercase">Vivienda</p>
                        <form>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="inmobiliario">
                            <label class="custom-control-label text-small pt-1" for="inmobiliario">Inmobiliario</label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="vivienda">
                            <label class="custom-control-label text-small pt-1" for="vivienda">Vivienda</label>
                          </div>
                        </form>
                      </div>
                      <div class="col-sm-3">
                        <p class="text-uppercase">Suministros</p>
                        <form>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="proveedores">
                            <label class="custom-control-label text-small pt-1" for="proveedores">Proveedores</label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="industriales">
                            <label class="custom-control-label text-small pt-1" for="industriales">Industriales</label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="especialidades">
                            <label class="custom-control-label text-small pt-1"
                              for="especialidades">Especialidades</label>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <p class="text-center font-weight-bold pt-3">4 / 4</p>
                </div>
              </div>
              <div class="d-flex justify-content-between pt-4">
                <a class="carousel-prev d-none" href="#carousel-repcchc" role="button" data-slide="prev">
                  <span class="btn btn-primary" aria-hidden="true">Anterior</span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-next ml-auto" href="#carousel-repcchc" role="button" data-slide="next">
                  <span class="btn btn-primary" aria-hidden="true">Siguiente</span>
                  <span class="sr-only">Next</span>
                </a>
                <a id="agregarRepCchc" class="carousel-add d-none" href="#carousel-repcchc" role="button">
                  <span class="btn btn-primary" aria-hidden="true">Agregar</span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div id="carousel-contCobranza" class="carousel slide d-none" data-interval="false" data-wrap="false"
              data-touch="false">
              <h3 class="text-primary text-uppercase font-weight-bold">Datos Contacto Cobranza</h3>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <form class="personas-asociadas">
                    <div class="personas-asociadas-form">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                        for="rut">RUT*</label>
                      <input type="number" id="rut" class="personas-asociadas-form__input--left form-control" required>
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                        for="vocativo">Vocativo</label>
                      <select type="text" id="vocativo"
                        class="personas-asociadas-form__input--right-big form-control"></select>
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                        for="nombres">Nombres</label>
                      <input type="text" id="nombres" class="personas-asociadas-form__input--left-big  form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                        for="apellido-pat">Apellido Paterno</label>
                      <input type="text" id="apellido-pat"
                        class="personas-asociadas-form__input--right-big  form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                        for="apellido-mat">Apellido Materno</label>
                      <input type="text" id="apellido-mat" class="personas-asociadas-form__input--left  form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                        for="email">Email</label>
                      <input type="email" id="email" class="personas-asociadas-form__input--right form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                        for="telefono">Teléfono</label>
                      <input type="tel" id="telefono" class="personas-asociadas-form__input--left form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                        for="fecha-nacimiento">Fecha
                        nacimiento</label>
                      <input type="date" id="fecha-nacimiento" class="personas-asociadas-form__input--right form-control">
                    </div>
                    <p class="text-center font-weight-bold pt-3">1 / 4</p>
                  </form>
                </div>
                <div class="carousel-item">
                  <form class="personas-asociadas">
                    <div class="personas-asociadas-form">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                        for="nacionalidad">Nacionalidad</label>
                      <input type="text" id="nacionalidad"
                        class="personas-asociadas-form__input--left datos-personales__input-nacionalidad form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right datos-personales__pasaporte-label invisible text-small font-weight-bold"
                        for="pasaporte">N° Pasaporte</label>
                      <input type="number" id="pasaporte"
                        class="personas-asociadas-form__input--right datos-personales__pasaporte-input invisible form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                        for="sexo">Sexo</label>
                      <select id="sexo" class="personas-asociadas-form__input--left form-control">
                        <option value="1">Femenino</option>
                        <option value="2">Masculino</option>
                      </select>
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                        for="edoCivil">Estado civil</label>
                      <select id="edoCivil" class="personas-asociadas-form__input--right form-control">
                        <option value="1">Soltero/a</option>
                        <option value="2">Casado/a</option>
                        <option value="3">Viudo/a</option>
                        <option value="4">Divorciado/a</option>
                        <option value="4">Separado/a</option>
                      </select>
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                        for="nivelDeEstudios">Nivel de
                        estudios</label>
                      <input type="text" id="nivelDeEstudios" class="personas-asociadas-form__input--left form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                        for="profesion">Profesión</label>
                      <select type="text" id="profesion"
                        class="personas-asociadas-form__input--right form-control"></select>
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold"
                        for="centroDeEstudios">Casa de
                        estudios</label>
                      <input type="text" id="centroDeEstudios" class="personas-asociadas-form__input--left form-control">
                      <label
                        class="personas-asociadas-form__label personas-asociadas-form__label--right text-small font-weight-bold"
                        for="cargoEmpresa">Cargo en la
                        empresa</label>
                      <input type="text" id="cargoEmpresa" class="personas-asociadas-form__input--right form-control">
                    </div>
                    <p class="text-center font-weight-bold pt-3">2 / 4</p>
                  </form>
                </div>
                <div class="carousel-item">
                  <form class="personas-asociadas">
                    <div class="direccion2 pt-2">
                      <label class="direccion2__label direccion2__label--left text-small font-weight-bold"
                        for="direccion">Dirección Particular</label>
                      <input type="text" id="direccion" class="direccion2__input--left-big form-control">
                      <label class="direccion2__label direccion2__label--smaller1 text-small font-weight-bold"
                        for="numero-dir">Número</label>
                      <input type="number" id="numero-dir" class="direccion2__input--smaller1 form-control">
                      <label class="direccion2__label direccion2__label--smaller2 text-small font-weight-bold"
                        for="numero-dpto">Depto</label>
                      <input type="number" id="numero-dpto" class="direccion2__input--smaller2 form-control">
                      <label class="direccion2__label direccion2__label--left text-small font-weight-bold"
                        for="pais">País</label>
                      <input type="text" id="pais" class="direccion2__input--left form-control" placeholder="Chile"
                        value="Chile" disabled>
                      <label class="direccion2__label direccion2__label--right text-small font-weight-bold"
                        for="provincia">Provincia</label>
                      <select type="text" id="provincia" class="direccion2__input--right form-control"></select>
                      <label class="direccion2__label direccion2__label--left text-small font-weight-bold"
                        for="region">Región</label>
                      <select type="text" id="region" class="direccion2__input--left form-control"></select>
                      <label class="direccion2__label direccion2__label--right text-small font-weight-bold"
                        for="comuna">Comuna</label>
                      <select type="text" id="comuna" class="direccion2__input--right form-control"></select>
                      <div class="custom-control custom-checkbox direccion2-check direccion2-check--left">
                        <input type="checkbox" class="custom-control-input" id="direccion1">
                        <label class="custom-control-label text-small pt-1" for="direccion1">Usar dirección para
                          correspondencia</label>
                      </div>
                      <div class="custom-control custom-checkbox direccion2-check direccion2-check--right">
                        <input type="checkbox" class="custom-control-input" id="direccion2">
                        <label class="custom-control-label text-small pt-1" for="direccion2">Usar dirección para
                          cobranzas</label>
                      </div>
                    </div>
                    <p class="text-center font-weight-bold pt-3">3 / 4</p>
                  </form>
                </div>
                <div class="carousel-item">
                  <p class="text-small text-primary font-weight-bold pt-4 pb-2">Seleccione el o los comités en que desea
                    inscribirse:</p>
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-sm-5">
                        <p class="text-uppercase">Infraestructura</p>
                        <form>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="contratistas-gen">
                            <label class="custom-control-label text-small pt-1" for="contratistas-gen">Contratistas
                              Generales</label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="infraest-publica">
                            <label class="custom-control-label text-small pt-1" for="infraest-publica">Obras
                              Infraestructura
                              Pública</label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="concesiones">
                            <label class="custom-control-label text-small pt-1" for="concesiones">Concesiones</label>
                          </div>
                        </form>
                      </div>
                      <div class="col-sm-4">
                        <p class="text-uppercase">Vivienda</p>
                        <form>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="inmobiliario">
                            <label class="custom-control-label text-small pt-1" for="inmobiliario">Inmobiliario</label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="vivienda">
                            <label class="custom-control-label text-small pt-1" for="vivienda">Vivienda</label>
                          </div>
                        </form>
                      </div>
                      <div class="col-sm-3">
                        <p class="text-uppercase">Suministros</p>
                        <form>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="proveedores">
                            <label class="custom-control-label text-small pt-1" for="proveedores">Proveedores</label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="industriales">
                            <label class="custom-control-label text-small pt-1" for="industriales">Industriales</label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="especialidades">
                            <label class="custom-control-label text-small pt-1"
                              for="especialidades">Especialidades</label>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <p class="text-center font-weight-bold pt-3">4 / 4</p>
                </div>
              </div>
              <div class="d-flex justify-content-between pt-4">
                <a class="carousel-prev d-none" href="#carousel-contCobranza" role="button" data-slide="prev">
                  <span class="btn btn-primary" aria-hidden="true">Anterior</span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-next ml-auto" href="#carousel-contCobranza" role="button" data-slide="next">
                  <span class="btn btn-primary" aria-hidden="true">Siguiente</span>
                  <span class="sr-only">Next</span>
                </a>
                <a id="agregarContCobranza" class="carousel-add d-none" href="#carousel-contCobranza" role="button">
                  <span class="btn btn-primary" aria-hidden="true">Agregar</span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div> <!-- col-lg-6 -->
        </div> <!-- row -->

        <div class="creacion-solicitud__buttons py-5">
          <a href="ingreso-y-consulta.html" @click="guardar" class="btn btn-danger btn--big m-2">Guardar y cerrar</a>
          <button @click="form3" class="btn btn-primary btn--big m-2"><i
              class="fas fa-long-arrow-alt-left fa-lg"></i> Anterior</button>
          <button @click="siguiente4" class="btn btn-primary btn--big m-2">Siguiente <i
              class="fas fa-long-arrow-alt-right fa-lg"></i></button>
        </div> <!-- creacion-solicitud__buttons -->
      </div> <!-- container -->












      <!-- Formulario 5 -->
      <div class="container" v-show="pjform5 == true">
        <div class="row">

        <!-- LEFT COLUMN -->
        <div class="col-sm-12 col-md-9 col-lg-7">
          <h3 class="text-primary text-uppercase">Patrocinantes</h3>
          <p class="text-muted text-small">Ambos socios deben tener sus cuotas al día</p>

<!-- Modales de Ayuda-->
<b-modal ref="modal-ayuda-patrocinante" hide-footer title="Ayuda">
              <div class="d-block text-center">
                <p style="padding:5%;">Los patrocinantes son los socios...</p>
              </div>
              <div class="d-block text-center">
                <b-button size="sm" variant="primary" @click="okAyuda()">ok</b-button>
              </div>
</b-modal>

<b-modal ref="modal-ayuda-patrocinador" hide-footer title="Ayuda">
              <div class="d-block text-center">
                <p style="padding:5%;">Los Representantes del Socio son los socios...</p>
              </div>
              <div class="d-block text-center">
                <b-button size="sm" variant="primary" @click="okAyudaPatrocinador()">ok</b-button>
              </div>
</b-modal>
<!-- Fin devModales de Ayuda -->
<form class="pt-3">
  <div class="row">
<div class="col-lg-6">
<label class="patrocinante__label text-small font-weight-bold" for="rut1"><i id="AyudaPatrocinante1" @click="showAyudaPatrocinador()" class="fas fa-question-circle question-icon"></i> Socio Patrocinante 1*</label>
<!-- HTML title specified via default slot -->
<input type="text" class="patrocinante__input form-control" v-model="nombrePatro"  @click="getListarPatrocinante">
<input type="text" class="patrocinante__input form-control" v-model="perIdPatrocinante" style="display:none;">
         <!-- <ul class="mt-2" :class="listaHov" style="padding-left:0" v-if="nombrePatro.length > 0 ? mostrarListadoPatro=true : ''">-->
            <ul class="mt-2" :class="mostrarListaPatrocinanteScroll" style="padding-left:0" v-if="mostrarListadoPatrocinante">
            <li v-for="(item, index) in buscarPatrocinante" :key="index" @click="itemClicked(item)" class="list-group-item listLine" style="cursor:pointer;">
              <span>{{ item.rut }}-{{ item.dv }}</span><br>
              <span>{{ item.nombre }} {{ item.apePat }}</span><br>
              <span>{{ item.camara }}</span>
            </li>
          </ul>
</div>

<div class="col-lg-6">
  <label class="patrocinante__label text-small font-weight-bold" for="rut1"><i id="AyudaPatrocinante1" @click="showAyudaPatrocinador()" class="fas fa-question-circle question-icon"></i>Representante del Socio*</label>  
<input type="text" class="patrocinante__input form-control" v-model="nombrePatrocinador" @click="getListarPatrocinador">
<input type="text" class="patrocinante__input form-control" v-model="perIdPatrocinador" style="display:none;">
          <!--<ul class="mt-2" :class="listaHov" v-if="nombrePatrocinador.length > 0 ? mostrarListadoPatro=true : ''">-->
            <ul class="mt-2" :class="mostrarListaPatrocinadorScroll" style="padding-left:0" v-if="mostrarListadoPatrocinador">
            <li v-for="(item, index) in buscarPatrocinador" :key="index" @click="itemClickedPatrocinador(item)" class="list-group-item listLine" style="cursor:pointer;">
              <span>{{ item.rut }}-{{ item.dv }}</span><br>
              <span>{{ item.nombre }} {{item.apePat}}</span>
              <span>{{ item.camara }}</span>
            </li>
          </ul>
</div>
  </div>
<br>
  <div class="row" @click="cerrarScrollPostulacion">
    <div class="col-lg-6">
      <a href="" download class="patrocinante__download">
              <img src="@/assets/images/mas.png" alt="Descargar formulario" width="33px" class="btn--sibling-hover-right">
              <span class="font-weight-bold text-small pl-1 btn--hover-right">Descargar formulario</span>
            </a>
            <div class="patrocinante__attachment pt-2">
              <input type="file" class="d-none" id="respaldo" required>
              <label for="respaldo" class="d-flex patrocinante__attachment-label">
                <div class="patrocinante__attachment-icon-container mr-2 btn--sibling-hover-right">
                  <img src="@/assets/images/mas.png" alt="Adjuntar respaldo de patrocinante" width="33px">
                </div>
                <div class="btn--hover-right">
                  <p class="text-small font-weight-bold">Adjuntar respaldo de patrocinante*</p>
                  <p class="text-small text-muted">De donde conoce al postulante, Trayectoria del postulante, Aporte al
                    gremio</p>
                </div>
              </label>
            </div>
    </div>
  </div>
</form>

<form class="pt-3">
  <div class="row">
<div class="col-lg-6">
<label class="patrocinante__label text-small font-weight-bold" for="rut1"><i id="AyudaPatrocinante1" @click="showAyuda()" class="fas fa-question-circle question-icon"></i> Socio Patrocinante 2*</label>  
<input type="text" class="patrocinante__input form-control" v-model="nombrePatrocinante2"  @click="getListarPatrocinante2">
<input type="text" class="patrocinante__input form-control" v-model="perIdPatrocinante2" style="display:none;">
         <!-- <ul class="mt-2" :class="listaHov" style="padding-left:0" v-if="nombrePatro.length > 0 ? mostrarListadoPatro=true : ''">-->
            <ul class="mt-2" :class="mostrarListaPatrocinanteScroll2" style="padding-left:0" v-if="mostrarListadoPatrocinante2">
            <li v-for="(item, index) in buscarPatrocinante2" :key="index" @click="itemClicked2(item)" class="list-group-item listLine" style="cursor:pointer;">
              <span>{{ item.rut }}-{{ item.dv }}</span><br>
              <span>{{ item.nombre }} {{ item.apePat }}</span><br>
              <span>{{ item.camara }}</span>
            </li>
          </ul>
</div>

<div class="col-lg-6">
  <label class="patrocinante__label text-small font-weight-bold" for="rut1"><i id="AyudaPatrocinante1" @click="showAyudaPatrocinador()" class="fas fa-question-circle question-icon"></i>Representante del Socio*</label>  
<input type="text" class="patrocinante__input form-control" v-model="nombrePatrocinador2" @click="getListarPatrocinador2">
<input type="text" class="patrocinante__input form-control" v-model="perIdPatrocinador2" style="display:none;">
          <!--<ul class="mt-2" :class="listaHov" v-if="nombrePatrocinador.length > 0 ? mostrarListadoPatro=true : ''">-->
            <ul class="mt-2" :class="mostrarListaPatrocinadorScroll2" style="padding-left:0" v-if="mostrarListadoPatrocinador2">
            <li v-for="(item, index) in buscarPatrocinador2" :key="index" @click="itemClickedPatrocinador2(item)" class="list-group-item listLine" style="cursor:pointer;">
              <span>{{ item.rut }}-{{ item.dv }}</span><br>
              <span>{{ item.nombre }} {{item.apePat}}</span>
              <span>{{ item.camara }}</span>
            </li>
          </ul>
</div>
  </div>
<br>
  <div class="row"  @click="cerrarScrollPostulacion">
    <div class="col-lg-6">
      <a href="" download class="patrocinante__download">
              <img src="@/assets/images/mas.png" alt="Descargar formulario" width="33px" class="btn--sibling-hover-right">
              <span class="font-weight-bold text-small pl-1 btn--hover-right">Descargar formulario</span>
            </a>
            <div class="patrocinante__attachment pt-2">
              <input type="file" class="d-none" id="respaldo" required>
              <label for="respaldo" class="d-flex patrocinante__attachment-label">
                <div class="patrocinante__attachment-icon-container mr-2 btn--sibling-hover-right">
                  <img src="@/assets/images/mas.png" alt="Adjuntar respaldo de patrocinante" width="33px">
                </div>
                <div class="btn--hover-right">
                  <p class="text-small font-weight-bold">Adjuntar respaldo de patrocinante*</p>
                  <p class="text-small text-muted">De donde conoce al postulante, Trayectoria del postulante, Aporte al
                    gremio</p>
                </div>
              </label>
            </div>
    </div>
  </div>
</form> 

 <!--<form class="d-grid patrocinante__form pt-3">
            <label class="patrocinante__label text-small font-weight-bold" for="rut1">RUT*</label>-->
            <!--<suggestions
    v-model="query"
    :options="options"
    :onInputChange="onCountryInputChange"
    :onItemSelected="onSearchItemSelected"
    ></suggestions>-->
        <!--  <input type="text" placeholder="Buscar" class="patrocinante__input form-control" v-model="nombrePatro">
          <ul class="patrocinante__attachment pt-2" style="width:27%;" v-if="nombrePatro.length > 0 ? mostrarListadoPatro=true : ''">
            <li v-for="(item, index) in buscarPatrocinante" :key="index" @click="itemClicked(item)" class="list-group-item" style="cursor:pointer;">
              <span>{{ item.rut }}-{{ item.dv }}</span><br>
              <span>{{ item.nombre }}</span>
              <span>{{ item.camara }}</span>
            </li>
          </ul>-->
            <!--<input id="rut1" class="patrocinante__input form-control" required>-->
            <!--<label class="patrocinante__label text-small font-weight-bold" for="patrocinante1">Patrocinante 1*</label>
            <input id="patrocinante1" class="patrocinante__input form-control" required>
            <label class="patrocinante__label text-small font-weight-bold" for="patrocinador1">Patrocinador*</label>
            <select id="patrocinador1" class="patrocinante__input form-control" required></select>
            <a href="" download class="patrocinante__download">
              <img src="@/assets/images/mas.png" alt="Descargar formulario" width="33px" class="btn--sibling-hover-right">
              <span class="font-weight-bold text-small pl-1 btn--hover-right">Descargar formulario</span>
            </a>
            <div class="patrocinante__attachment pt-2">
              <input type="file" class="d-none" id="respaldo" required>
              <label for="respaldo" class="d-flex patrocinante__attachment-label">
                <div class="patrocinante__attachment-icon-container mr-2 btn--sibling-hover-right">
                  <img src="@/assets/images/mas.png" alt="Adjuntar respaldo de patrocinante" width="33px">
                </div>
                <div class="btn--hover-right">
                  <p class="text-small font-weight-bold">Adjuntar respaldo de patrocinante*</p>
                  <p class="text-small text-muted">De donde conoce al postulante, Trayectoria del postulante, Aporte al
                    gremio</p>
                </div>
              </label>
            </div>
          </form>-->

          <!--<form class="d-grid patrocinante__form pt-5">
            <label class="patrocinante__label text-small font-weight-bold" for="rut2">RUT*</label>
            <input id="rut2" class="patrocinante__input form-control" required>
            <label class="patrocinante__label text-small font-weight-bold" for="patrocinante2">Patrocinante 2*</label>
            <input id="patrocinante2" class="patrocinante__input form-control" required>
            <label class="patrocinante__label text-small font-weight-bold" for="patrocinador2">Patrocinador*</label>
            <select id="patrocinador2" class="patrocinante__input form-control" required></select>
            <a href="" download class="patrocinante__download">
              <img src="@/assets/images/mas.png" alt="Descargar formulario" width="33px" class="btn--sibling-hover-right">
              <span class="font-weight-bold text-small pl-1 btn--hover-right">Descargar formulario</span>
            </a>
            <div class="patrocinante__attachment pt-2">
              <input type="file" class="d-none" id="respaldo" required>
              <label for="respaldo" class="d-flex patrocinante__attachment-label">
                <div class="patrocinante__attachment-icon-container mr-2 btn--sibling-hover-right">
                  <img src="@/assets/images/mas.png" alt="Adjuntar respaldo de patrocinante" width="33px">
                </div>
                <div class="btn--hover-right">
                  <p class="text-small font-weight-bold">Adjuntar respaldo de patrocinante*</p>
                  <p class="text-small text-muted">De donde conoce al postulante, Trayectoria del postulante, Aporte al
                    gremio</p>
                </div>
              </label>
            </div>
          </form>-->
        </div> <!-- col-md-6 -->

        <!-- RIGHT COLUMN -->
        <div class="col-sm-3 col-md-3 col-lg-5"  @click="cerrarScrollPostulacion">
        </div> <!-- col-md-6 -->
      </div> <!-- row -->

       <div class="creacion-solicitud__buttons py-5 mt-5">
        <button @click="guardar" class="btn btn-danger btn--big m-2">Guardar y cerrar</button>
        <button @click="form4" class="btn btn-primary btn--big m-2"><i
            class="fas fa-long-arrow-alt-left fa-lg"></i> Anterior</button>
        
        <button class="btn btn-primary btn--big m-2" @click="siguiente5">Siguiente <i
            class="fas fa-long-arrow-alt-right fa-lg"></i></button>
      </div>  <!-- creacion-solicitud__buttons -->

    </div> <!-- container -->





















      <!-- Formulario 6 -->
      <div class="container" v-show="pjform6 == true">
          <form>
            <div class="row">

              <!-- LEFT COLUMN -->
              <div class="col-md-6">
                <h3 class="text-primary text-uppercase">Compromisos</h3>
                <div class="compromisos">
                  <div class="compromisos__header bg-primary p-3">
                    <h3 class="text-uppercase text-white text-center m-0 font-weight-normal">Por favor leer compromisos ante
                      la CCHC antes de
                      enviar la postulación</h3>
                  </div>
                  <div class="compromisos__body p-3">
                    <div class="compromisos__text-container">
                      <div class="accordion" id="accordionExample">
                        <div class="card">
                          <div class="card-header d-flex align-items-center" id="headingOne">
                            <h3 class="mb-0">Lorem Ipsum</h3>
                            <button class="btn btn-link ml-auto" type="button" data-toggle="collapse"
                              data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              <i class="fas fa-plus-circle"></i>
                            </button>
                          </div>

                          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                            data-parent="#accordionExample">
                            <div class="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                              squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                              nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                              single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                              labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                              Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                              haven't heard of them accusamus labore sustainable VHS.
                              <div class="compromisos__input pt-5">
                                <div class="custom-control custom-checkbox">
                                  <input type="checkbox" class="custom-control-input" id="leido1" required>
                                  <label class="custom-control-label font-weight-bold pt-1" for="leido1">He leído las
                                    condiciones y
                                    términos de la CCHC</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-header d-flex align-items-center" id="headingTwo">
                            <h3 class="mb-0">Lorem Ipsum</h3>
                            <button class="btn btn-link ml-auto collapsed" type="button" data-toggle="collapse"
                              data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              <i class="fas fa-plus-circle"></i>
                            </button>
                          </div>
                          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                            data-parent="#accordionExample">
                            <div class="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                              squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                              nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                              single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                              labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                              Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                              haven't heard of them accusamus labore sustainable VHS.
                              <div class="compromisos__input pt-5">
                                <div class="custom-control custom-checkbox">
                                  <input type="checkbox" class="custom-control-input" id="leido2" required>
                                  <label class="custom-control-label font-weight-bold pt-1" for="leido2">He leído las
                                    condiciones y
                                    términos de la CCHC</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-header d-flex align-items-center" id="headingThree">
                            <h3 class="mb-0">Lorem Ipsum</h3>
                            <button class="btn btn-link ml-auto collapsed" type="button" data-toggle="collapse"
                              data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              <i class="fas fa-plus-circle"></i>
                            </button>
                          </div>
                          <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                            data-parent="#accordionExample">
                            <div class="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                              squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
                              nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                              single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                              labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                              Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably
                              haven't heard of them accusamus labore sustainable VHS.
                              <div class="compromisos__input pt-5">
                                <div class="custom-control custom-checkbox">
                                  <input type="checkbox" class="custom-control-input" id="leido3" required>
                                  <label class="custom-control-label font-weight-bold pt-1" for="leido3">He leído las
                                    condiciones y
                                    términos de la CCHC</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> <!-- col-md-6 -->

              <!-- RIGHT COLUMN -->
              <div class="col-md-6 right-column">
                <h3 class="text-primary text-uppercase compromisos__confirmacion-title">Confirmación</h3>
                <p class="text-muted text-small font-weight-bold">Antes de enviar su postulación revise toda la información
                  adjunta en los formularios.</p>

                <div class="card mt-3">
                  <div class="card-header text-white text-uppercase bg-primary py-3 px-5">Datos del solicitante</div>
                  <div class="card-body pt-4 pb-5 px-5 card__form card__form--pjuridica">
                    <p class="card__form-label">Nombre: <span class="card__form-data">Carlos Vandal</span></p>
                    <p class="card__form-label">Teléfono: <span class="card__form-data">+569 9999 9999</span></p>
                    <p class="card__form-label">Email: <span class="card__form-data">carlos.vandal@bri.cl</span></p>
                    <p class="card__form-label">Empresa: <span class="card__form-data">Colibrí</span></p>
                    <p class="card__form-label">Dirección: <span class="card__form-data">Eliodoro Yañez 1163, Providencia,
                        Santiago</span></p>
                  </div>
                </div>

                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="enviar-copia">
                  <label class="custom-control-label font-weight-bold text-muted pt-1" for="enviar-copia">Enviar una copia
                    de los datos entregados en la solicitud a mi correo electrónico</label>
                </div>
              </div> <!-- col-md-6 -->
            </div> <!-- row -->
            <div class="d-flex justify-content-center pt-5">
              <button class="btn btn--big btn--submit text-white text-uppercase">Enviar postulación</button>
            </div>
          </form>

          <div class="creacion-solicitud__buttons py-5">
            <router-link to="ingreso-y-consulta" class="btn btn-danger btn--big m-2">Guardar y cerrar</router-link>
            <button @click="form5" class="btn btn-primary btn--big m-2"><i
                class="fas fa-long-arrow-alt-left fa-lg"></i> Anterior</button>
            <a href="resumen-formulario.html" class="btn btn-primary btn--big m-2">Siguiente <i
                class="fas fa-long-arrow-alt-right fa-lg"></i></a>
         </div> <!-- creacion-solicitud__buttons -->

        <!---->
      </div> <!-- container -->
  </main>
</template>

<script>

  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  import { mapState, mapMutations } from 'vuex';
  import Datepicker from 'vuejs-datepicker';
  import moment from "moment";
  import { es } from 'vuejs-datepicker/dist/locale'
  import VeeValidate, { Validator } from "vee-validate";
  // Indicar uso de idioma español
  Validator.localize("es", es);
  
  VeeValidate.Validator.localize("es");
  Vue.use(VeeValidate, {
  classes: true,// Sí queremos que ponga clases automáticamente
  // Indicar qué clase poner al input en caso de que sea
  // válido o inválido. Usamos Bootstrap 4
  classNames: {
    valid: "is-valid",
    invalid: "is-invalid",
  },
  // Podría ser blur, change, etcétera. Si está vacío
  // entonces se tiene que validar manualmente
  events: "change|blur|keyup",
});

  export default{
     props: ['attribute_name', 'errors_form'],
     name: 'personaJuridicaForm',
  components: {
      Datepicker
    },
  data () {
    return {
      //rutNoValido: true,
      es: es,
      language: "es",
      date: new Date(),
      format: 'dd-MM-yyyy',
      disabledDates:{
      from: new Date() //Deshabilita fechas futuras
      },
     
     listaGente:[
      {
      id:'1',
      nombre:'Leo',
      rut:'1',
      razon: 'Leonardo C.A',
      editing: false
      },
      {
      id:'2',
      nombre:'Gaby',
      rut:'2',
      razon:'Gabriela C.A',
      editing: false
      },
      {
        id:'3',
        nombre:'Gene',
        rut:'3',
        razon: 'Genesis C.A',
        editing: false
      }
      ],


     personaJuridica:[{
       datosPersonales:{

       },
       informacionComercial:{
          
       },
       composicion:{

       },
       cchc:{

       },
       patrocinantes:{

       },

       compromisos:{

       }
     }],

     // Data Form 1
     imagen: '',
     file: '',
     filetm: '',
     filecv: '',
     filesrl: '',
     filesa: '',
     files: '',
     archivoExiste: true,
     before1: true,
     next1: true,
     next2: true,
     disabled: false,
     disabledTwo: false,
     array:[],
     listadoRegiones:[],
     provincias:[],
     provinciaSeleccionada:'',
     regionSeleccionada:'',
     comunas:[],
     comunaSeleccionada:'',
     selectedFile: [],
     selectedFileTM: [],
     selectedFileCV: [],
     selectedFileSRL: [],
     selectedFileSA: [],
     actividades:[],
     giros:[],
     categorias:[],
     rut:'',
     fantasyName:'',
     razonSocial:'',
     date:'',
     giroModel:'',
     activity:'',
     category:'',
     image: '',
     calle:'',
     numero: '',
     oficina:'',
     continuacion:'',
     pais:'',
     provincia:'',
     comuna:'',
     telefonosArray:[],
     emailsArray:[],
     inputsTel: [
        {
          telEx:''
        }
      ],
      inputsEmail: [
        {
          email:''
        }
      ],
     reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
     website: '',
     trabajadores: '',
      administrativos:'',
      tecnicos:'',
      profesionales:'',
      balance: [],
      impuestoRenta: [],
      patrimonio: '',
      capitalPropio: [],
      facturacion: [],
      volumenFacturado: '',

      rangos: '',

     //Composición Accionaria Data
     rutComp:'',
      razonSocialComp:'',
      porcentaje:0,
      composicion:[],
      formRegistrarPersona: false,
      disabled: 0,
      encuentra:'',
      editPor: false,
      respuesta: false,

      //Data para Patrocinantes
       patrocinantes:[],
       patrocinadores:[],
       patrocinantes2:[],
       patrocinadores2:[],
       nombrePatro:'',
       nombrePatrocinador:'',
       mostrarListadoPatrocinante: false,
       mostrarListadoPatrocinador: false,
       mostrarListadoPatrocinante2: false,
       mostrarListadoPatrocinador2: false,
       patrocinanteSelec:'',
       patrocinadorSelec:'',
       patrocinanteSelec2:'',
       patrocinadorSelec2:'',
       mostrarListaPatrocinanteScroll:'listaHov',
       mostrarListaPatrocinadorScroll:'listaHov',
       mostrarListaPatrocinanteScroll2:'listaHov',
       mostrarListaPatrocinadorScroll2:'listaHov',
       nombrePatrocinante2:'',
       nombrePatrocinador2:'',
       perIdPatrocinante:'',
       perIdPatrocinador:'',
       perIdPatrocinante2:'',
       perIdPatrocinador2:'',

      //Data Compromisos
      terms: false,
      terms2: false,
      terms3: false,
      msgTerm: true
    }
  },

  mounted: function () {
    console.log("mounted...");
  },

  methods:{

    ...mapMutations(['form1','form2','form3', 
                     'form4','form5','form6']),
    onFileSelected() {
      //this.selectedFile = event.target.files
      //console.log(this.selectedFile);
      this.file = this.$refs.file.files[0];
      this.selectedFile = event.target.files
      console.log(this.file);

    },
    onFileSelectedCV(event) {
      this.filecv = this.$refs.filecv.files[0];
      this.selectedFileCV = event.target.files
      console.log(this.filecv);
    },
    onFileSelectedTM(event) {
      this.filetm = this.$refs.filetm.files[0];
      this.selectedFileTM = event.target.files
      console.log(this.filetm);
    },
    onFileSelectedSRL(event) {
      this.filesrl = this.$refs.filesrl.files[0];
      this.selectedFileSRL = event.target.files
      console.log(this.filesrl);
    },
    onFileSelectedSA(event) {
      this.filesa = this.$refs.filesa.files[0];
      this.selectedFileSA = event.target.files
      console.log(this.filesa);
      alert(this.filesa.name);
      $("div").append("Hello <b>world</b>!");
    
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
      this.fileImage = this.$refs.fileImage.files[0];
      console.log(this.fileImage);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    onFileChanged (event) {
      const file = event.target.files[0]
      this.fileImage = this.$refs.fileImage.files[0];
      console.log(this.fileImage);
    },
    onUpload() {
      let fd = new FormData();
      fd.append('file', this.file)
      /*let params = new URLSearchParams();
      params.append('selectedFile', 'fileToUpload' );
      var inputFileImage = document.getElementById("fileToUpload");
      axios.post('http://postulacion.isc.cl/uploadfile', params,
      {
        headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        }
      })
      .then(res => {
        console.log(res)
      });*/

      axios.post( 'http://postulacion.isc.cl/uploadfile',
                fd,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
    },

    onUploadTM() {
      let fd = new FormData();
      fd.append('filetm', this.filetm)
      /*let params = new URLSearchParams();
      params.append('selectedFile', 'fileToUpload' );
      var inputFileImage = document.getElementById("fileToUpload");
      axios.post('http://postulacion.isc.cl/uploadfile', params,
      {
        headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        }
      })
      .then(res => {
        console.log(res)
      });*/

      axios.post( 'http://postulacion.isc.cl/uploadfiletm',
                fd,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
    },
    onUploadCV() {
      let fd = new FormData();
      fd.append('filecv', this.filecv)
      /*let params = new URLSearchParams();
      params.append('selectedFile', 'fileToUpload' );
      var inputFileImage = document.getElementById("fileToUpload");
      axios.post('http://postulacion.isc.cl/uploadfile', params,
      {
        headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        }
      })
      .then(res => {
        console.log(res)
      });*/

      axios.post( 'http://postulacion.isc.cl/uploadfilecv',
                fd,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
    },

    onUploadSRL() {
      let fd = new FormData();
      fd.append('filesrl', this.filesrl)
      /*let params = new URLSearchParams();
      params.append('selectedFile', 'fileToUpload' );
      var inputFileImage = document.getElementById("fileToUpload");
      axios.post('http://postulacion.isc.cl/uploadfile', params,
      {
        headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        }
      })
      .then(res => {
        console.log(res)
      });*/

      axios.post( 'http://postulacion.isc.cl/uploadfilesrl',
                fd,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
    },

    onUploadSA() {
      let fd = new FormData();
      fd.append('filesa', this.filesa)
      /*let params = new URLSearchParams();
      params.append('selectedFile', 'fileToUpload' );
      var inputFileImage = document.getElementById("fileToUpload");
      axios.post('http://postulacion.isc.cl/uploadfile', params,
      {
        headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        }
      })
      .then(res => {
        console.log(res)
      });*/

      axios.post( 'http://postulacion.isc.cl/uploadfilesa',
                fd,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
    },

    onUploadFileImage() {
      let fd = new FormData();
      fd.append('fileImage', this.fileImage)
      /*let params = new URLSearchParams();
      params.append('selectedFile', 'fileToUpload' );
      var inputFileImage = document.getElementById("fileToUpload");
      axios.post('http://postulacion.isc.cl/uploadfile', params,
      {
        headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        }
      })
      .then(res => {
        console.log(res)
      });*/

      axios.post( 'http://postulacion.isc.cl/uploadfileimage',
                fd,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
    },

    removeImage: function (e) {
      this.image = '';
    },
    removeFile: function (e) {
      this.selectedFile = '';
    },
    removeFileTM: function (e) {
      this.selectedFileTM = [];
    },
    removeFileCV: function (e) {
      this.selectedFileCV = '';
    },
    removeFileSRL: function (e) {
      this.selectedFileSRL = '';
    },
    removeFileSA: function (e) {
      this.selectedFileSA = '';
    },
    addTel() {
      this.inputsTel.push({ telEx: '' });
      this.inputsTel.reverse();  
    },
    removeTel(index) {
      this.inputsTel.splice(index, 1);
    },
    addEmail() {
      this.inputsEmail.push({ email: '' });
      this.inputsEmail.reverse();
    },
    removeEmail(index) {
      this.inputsEmail.splice(index, 1);
    },
    getListadoRegion: function(){
      Vue.axios.get('http://postulacion.isc.cl/listarRegion').then((response) => {
        console.log(response);
        this.listadoRegiones = response.data;
        console.log(this.listadoRegiones);
      })
    },

    getListadoProvincia: function(){
      let idReg = this.regionSeleccionada;
      
      Vue.axios.get('http://postulacion.isc.cl/listarProvincias/'+idReg).then((response) => {
        this.provincias = response.data;
        console.log(this.provincias);
      })
    
    },

    getListadoComuna: function(){
       let idComuna = this.provinciaSeleccionada;

      Vue.axios.get('http://postulacion.isc.cl/listarComuna/'+idComuna).then((response) => {
        this.comunas = response.data;
        console.log(this.comunas);
      })
    
    },

    getListadoGiro: function(){
      Vue.axios.get('http://postulacion.isc.cl/listarGiro').then((response) => {
        this.giros = response.data;
        console.log(this.giros);
      })
    
    },

    getListadoCategoria: function(){
      Vue.axios.get('http://postulacion.isc.cl/listarCategoria').then((response) => {
        this.categorias = response.data;
        console.log(this.categorias);
      })
    
    },

    isEmailValid: function() {
      return (this.emails == "")? "" : (this.reg.test(this.emails)) ? 'has-success' : 'has-error';
    },

    //Composición Accionaria Methods
    editarPorcentaje: function (indice){

      this.showModalEditar();
      this.porcentaje = this.composicion[indice].porcentaje;
      this.rutComp = this.composicion[indice].rutComp;
      this.disabled = 1;
      this.editPor = true;
      
     
    },
    eliminarComposicion: function (indice){
      if(this.respuesta == true){
        this.composicion.splice(indice, 1);
        this.rutComp = '';
        this.razonSocial = '';
        this.porcentaje = '';
        this.disabled = 0;
      }else{
        this.showModalEliminar();
        
      }
    },
    showModalCrear(){
      this.$refs['modal-crear'].show();
    },

    aceptarCreacion(){
       this.formRegistrarPersona = true;
       this.$refs['modal-crear'].hide();
    },

    cancelarCreacion(){
        this.formRegistrarPersona = false;
        this.rutComp = '';
        this.razonSocialComp = '';
        this.porcentaje = '';
        this.disabled = 0;
        this.$refs['modal-crear'].hide();

      },

    showModalEliminar(){
          this.$refs['modal-eliminar'].show();
    },

    aceptarEliminacion(){
          this.$refs['modal-eliminar'].hide();
          this.respuesta = true;
          this.eliminarComposicion();
    },

    cancelarEliminacion(){
        this.$refs['modal-eliminar'].hide();
        this.respuesta = false;

      },

    showModalEditar() {
        this.$refs['modal-editar'].show();
    },

    aceptarEdicion(){
          this.$refs['modal-editar'].hide();
          this.setFocus();
    },

    cancelarEdicion(){
        this.$refs['modal-editar'].hide();
        this.rutComp = '';
        this.razonSocialComp = '';
        this.porcentaje = '';
        this.disabled = 0;
        this.editPor = false;

    },

    okAyuda(){
      this.$refs['modal-ayuda-patrocinante'].hide();
    },

    showAyuda(){
      this.$refs['modal-ayuda-patrocinante'].show();
    },

    okAyudaPatrocinador(){
      this.$refs['modal-ayuda-patrocinador'].hide();
    },

    showAyudaPatrocinador(){
      this.$refs['modal-ayuda-patrocinador'].show();
    },

    setFocus(){
        this.$refs.porcentaje.focus();
    },

    enviarPostulacion: function(){
        this.guardar();
        let obj = JSON.stringify(this.personaJuridica);
    //console.log(obj);
        Vue.axios.post('http://postulacion.isc.cl/personaJuridica', obj).then((response) => {
          alert("Postulacion Enviada");
          console.log(response.data);
          //console.log(response);
         
        }).catch(function (error) {
          console.log("AXIOS ERROR: ", error);
          });

    },

    sendFile: function() {
      let obj = JSON.stringify(this.personaJuridica);
      console.log(obj);
    },

    itemClicked(item) {
      console.log(item.perId);
      this.patrocinanteSelec = item.perId;
      this.perIdPatrocinante = item.perId;
      this.nombrePatro = item.nombre + ' ' + item.rut + '-' + item.dv + ' ' + item.camara;
      this.mostrarListaPatrocinanteScroll = 'listaHovHidden';
   },

    itemClicked2(item) {
       //console.log(item.perId);
        
        
        if(this.patrocinanteSelec != item.perId){
          this.patrocinanteSelec2 = item.perId;
          this.perIdPatrocinante2 = item.perId;
          this.nombrePatrocinante2 = item.nombre + ' ' + item.rut + '-' + item.dv + ' ' + item.camara;
          this.mostrarListaPatrocinanteScroll2 = 'listaHovHidden';
        }else{
          alert("No puede ser el mismo patrocinante");
          this.mostrarListadoPatrocinante2=false;
          this.nombrePatrocinante2 = '';
        }
        
    },

 itemClickedPatrocinador(item) {
   console.log(item.perId);
   
    this.patrocinadorSelec = item.perId;
    this.perIdPatrocinador = item.perId;
    this.nombrePatrocinador = item.nombre + ' ' + item.apePat + ' ' + item.rut + '-' + item.dv;
    this.mostrarListaPatrocinadorScroll = 'listaHovHidden'; 
   
    
        
 },

 itemClickedPatrocinador2(item) {
   console.log(item.perId);
    this.patrocinadorSelec2 = item.perId;
    this.perIdPatrocinador2 = item.perId;
    this.nombrePatrocinador2 = item.nombre + ' ' + item.apePat + ' ' + item.rut + '-' + item.dv;
    this.mostrarListaPatrocinadorScroll2 = 'listaHovHidden'; 
        
 },
 

    getListarPatrocinante: function(){
      console.log('Buscando...');
      Vue.axios.get('http://postulacion.isc.cl/listarPatrocinante').then((response) => {
      this.patrocinantes = response.data;
      });
      this.mostrarListaPatrocinanteScroll='listaHov';
      this.mostrarListaPatrocinadorScroll='listaHovHidden';
      this.mostrarListadoPatrocinante=true;
      this.nombrePatrocinador='';
      this.mostrarListadoPatrocinador=false;

    },

    getListarPatrocinante2: function(){
      console.log('Buscando...');
      Vue.axios.get('http://postulacion.isc.cl/listarPatrocinante').then((response) => {
      this.patrocinantes2 = response.data;
      });

      this.mostrarListaPatrocinanteScroll2='listaHov';
      this.mostrarListaPatrocinadorScroll2='listaHovHidden';
      this.mostrarListadoPatrocinante2=true;
      this.nombrePatrocinador2='';
      this.mostrarListadoPatrocinador2=false;

    },

    getListarPatrocinador: function(){
      console.log("Buscando Patrocinador...");
      let idPatrocinante = this.patrocinanteSelec;

      if(idPatrocinante !='' && this.nombrePatro !=''){

      Vue.axios.get('http://postulacion.isc.cl/listarPatrocinador/'+idPatrocinante).then((response) => {
      this.patrocinadores = response.data;
      }).catch(function (error) {
        // handle error
      console.log(error);
      });

      this.mostrarListaPatrocinadorScroll='listaHov';
      this.mostrarListaPatrocinanteScroll='listaHovHidden';
      this.mostrarListadoPatrocinador=true;
      this.mostrarListadoPatrocinante=false;

      }else{
        console.log("Debe introducir un patrocinante");
        this.mostrarListadoPatrocinador=false;
        this.mostrarListaPatrocinadorScroll='listaHovHidden';
      }
      

    },

    getListarPatrocinador2: function(){
      console.log("Buscando Patrocinador2...");
      let idPatrocinante = this.patrocinanteSelec2;

      if(idPatrocinante !='' && this.nombrePatrocinante2 !=''){

      Vue.axios.get('http://postulacion.isc.cl/listarPatrocinador/'+idPatrocinante).then((response) => {
      this.patrocinadores2 = response.data;
      this.mostrarListaPatrocinadorScroll2='listaHov';
      this.mostrarListaPatrocinanteScroll2='listaHovHidden';
      this.mostrarListadoPatrocinador2=true;
      this.mostrarListadoPatrocinante2=false;
      }).catch(function (error) {
        // handle error
      console.log(error);
      });

      }else{
        console.log("Debe introducir un patrocinante");
        this.mostrarListadoPatrocinador2=false;
        this.mostrarListaPatrocinadorScroll2='listaHovHidden';
      }
      
    },

    cerrarScrollPostulacion(){
      console.log("Le estoy dando click");
      this.mostrarListadoPatrocinador2=false;
      this.mostrarListadoPatrocinante2=false;
      this.mostrarListadoPatrocinador=false;
      this.mostrarListadoPatrocinante=false;
    },

     siguiente(){
      /*this.$validator.validate()
        .then(esValido => {
          if (esValido) {*/

            this.guardar();
            this.form2();
            console.log("Puede Pasar");

          /*} else {
            alert("Debe llenar campos requeridos");
          }
        });  */
    },                

    siguiente2(){
     /* this.$validator.validate()
        .then(esValido => {
          if (esValido) {*/

            this.guardar();
            this.form3();
            console.log("Puede Pasar");

         /* } else {
            alert("Debe llenar campos requeridos");
          }
        });  */
    },

    siguiente3(){
      /*this.$validator.validate()
        .then(esValido => {
          if (esValido) {*/

            this.guardar();
            console.log("Antes del form4");
            this.form4();
            console.log("Puede Pasar");

         /* } else {
            alert("Debe llenar campos requeridos");
          }
        }); */ 
    },

    siguiente4(){
     /* this.$validator.validate()
        .then(esValido => {
          if (esValido) {*/

            this.guardar();
            this.form5();
            console.log("Puede Pasar");

         /* } else {
            alert("Debe llenar campos requeridos");
          }
        });  */
    },

    siguiente5(){
     /* this.$validator.validate()
        .then(esValido => {
          if (esValido) {*/

            this.guardar();
            this.form6();
            console.log("Puede Pasar");

        /*  } else {
            alert("Debe llenar campos requeridos");
          }
        });  */
    },

    guardar: function(){
      this.onUpload();
      this.onUploadTM();
      this.onUploadCV();
      this.onUploadSRL();
      this.onUploadSA();
      this.onUploadFileImage();
      this.personaJuridica.push({
        datosPersonales:{
        rut: this.rut,
        files: this.files,
        fantasyName: this.fantasyName,
        razonSocial: this.razonSocial,
        razonSocialComp: this.razonSocialComp,
        date: this.date,
        giro: this.giro,
        giros: this.giros,
        activity: this.activity,
        category: this.category,
        image: this.image,
        selectedFile: this.selectedFile,
        selectedFileTM: this.selectedFileTM,
        selectedFileCV: this.selectedFileCV,
        selectedFileSRL: this.selectedFileSRL,
        selectedFileSA: this.selectedFileSA,
        calle: this.calle,
        numero: this.numero,
        oficina: this.oficina,
        continuacion: this.continuacion,
        pais: this.pais,
        region: this.region,
        provincia: this.provincia,
        comuna: this.comuna,
        telefonosArray: this.telefonosArray,
        emails: this.emails,
        website: this.website,
        listadoRegiones: this.listadoRegiones,
        profesionales: this.profesionales,
        administrativos: this.administrativos,
        tecnicos: this.tecnicos,
        trabajadores: this.trabajadores,
        balance: this.balance,
        impuestoRenta: this.impuestoRenta,
        patrimonio: this.patrimonio,
        capitalPropio: this.capitalPropio,
        facturacion: this.facturacion,
        volumenFacturado: this.volumenFacturado,
        rangos: this.rangos,
      },
        
        direcciones:{
          calle:this.calle
          
        },

        composicion:{
          com: this.composicion
        }


      });



      /*this.trabajadores.push({
        values: {
          administrativos: this.administrativos,
          tecnicos: this.tecnicos,
          profesionales: this.profesionales
        }
      });*/
      this.sendFile();
      console.log(this.personaJuridica);
    },

    buscar: function (indice){
    
      if(this.rutComp == ''){
        alert("Debe llenar campo rut");
      }else{
          
      for(var i=0; i< this.listaGente.length; i++){
       
      
        if(this.listaGente[i].rut == this.rutComp){

          this.razonSocialComp = this.listaGente[i].razon;
          
          this.encuentra = '';
          let posi = '';
          for(let k = 0; k < this.composicion.length; k++) {
           
            if (this.composicion[k].rutComp == this.rutComp) {
              this.encuentra = this.rutComp;
              posi = k;
              break;
            }
            
          }
        
        
          if(this.editPor == true){


            this.composicion.splice(posi, 1);

              this.composicion.push({
            rutComp: this.listaGente[i].rut,
            nombre: this.listaGente[i].nombre,
            porcentaje: this.porcentaje,
            editing: this.listaGente[i].editing});
           this.guardar();
           this.editPor = false;

          }else{

          if(this.encuentra == ''){
            this.composicion.push({
            rutComp: this.listaGente[i].rut,
            nombre: this.listaGente[i].nombre,
            porcentaje: this.porcentaje,
            editing: this.listaGente[i].editing

          });

           this.guardar();
           this.editPor = false;
          }else{


              alert("El Rut " +this.rutComp+" ya exite");
            this.razonSocialComp = '';
          }  

          

          }
            


          this.formRegistrarPersona = false;
          
          this.disabled = 0;
          this.rutComp = '';
          //this.razonSocialComp = '';
          this.porcentaje = '';
         
          return;
        
      }
      
      }   
        this.showModalCrear();
        
            
    }
        
      
    },
    // Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut: function(rutCompleto) {
      rutCompleto = rutCompleto.replace("‐","-");
      if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
          return false;
      var tmp     = rutCompleto.split('-');
      var digv    = tmp[1];
      var rut     = tmp[0];
      if ( digv == 'K' ) digv = 'k' ;

      return (this.dv(rut) == digv );
    },

    dv : function(T){
        var M=0,S=1;
        for(;T;T=Math.floor(T/10))
            S=(S+T%10*(9-M++%6))%11;
        return S?S-1:'k';
    },
    updateRutNum: function(){
      
      let estadoRut = this.validaRut(this.rut);
      this.rutNoValido = estadoRut;
    }
  },
  created: function(){
    Vue.axios.get('http://postulacion.isc.cl/listarActividad').then((response) => {
        this.actividades = response.data;
        console.log(this.actividades);
    })

    this.getListadoRegion();
    this.getListadoGiro();
    this.getListadoCategoria();
    this.isEmailValid();
  },
  computed:{
    ...mapState(['rutGlobal','pjform1', 'pjform2', 'pjform3',
                 'pjform4','pjform5','pjform6']),

    isDisabled: function(){
    
    if(this.terms==true && this.terms2==true && this.terms3==true){
      this.msgTerm = false;
      return false;
    }
      this.msgTerm = true;
      return true; 
    },

    buscarPatrocinante: function () {
      return this.patrocinantes.filter((item) => {
                return item.nombre.toLowerCase().includes(this.nombrePatro.toLowerCase()) || 
                item.rut.toLowerCase().includes(this.nombrePatro.toLowerCase());
            });
    },
    buscarPatrocinante2: function () {
      return this.patrocinantes2.filter((item) => {
                return item.nombre.toLowerCase().includes(this.nombrePatrocinante2.toLowerCase()) || 
                item.rut.toLowerCase().includes(this.nombrePatrocinante2.toLowerCase());
            });
    },
    buscarPatrocinador: function () {
      return this.patrocinadores.filter((item) => {
                return item.nombre.toLowerCase().includes(this.nombrePatrocinador.toLowerCase()) || 
                item.rut.toLowerCase().includes(this.nombrePatrocinador.toLowerCase());
            });
    },
    buscarPatrocinador2: function () {
      return this.patrocinadores2.filter((item) => {
                return item.nombre.toLowerCase().includes(this.nombrePatrocinador2.toLowerCase()) || 
                item.rut.toLowerCase().includes(this.nombrePatrocinador2.toLowerCase());
            });
    } 
  }
}


$(document).ready(function() {
    $(".upload").on('click', function() {
        $(".upload-msg").text('Cargando...');
        console.log("Subiendo archivo...");
        var inputFileImage = document.getElementById("fileToUpload");
        var file = inputFileImage.files[0];
        var data = new FormData();
        data.append('fileToUpload',file);
        
        /*jQuery.each($('#fileToUpload')[0].files, function(i, file) {
          data.append('file'+i, file);
        });*/
              
        $.ajax({
          url: "http://postulacion.isc.cl/uploadfile",        // Url to which the request is send
          type: "POST",             // Type of request to be send, called as method
          data: data,         // Data sent to server, a set of key/value pairs (i.e. form fields and values)
          contentType: false,       // The content type used when sending data to the server.
          cache: false,             // To unable request pages to be cached
          processData:false,        // To send DOMDocument or non processed data file it is set to false
          success: function(data)   // A function to be called if request succeeds
          {
            $(".upload-msg").html(data);
            window.setTimeout(function() {
            $(".alert-dismissible").fadeTo(500, 0).slideUp(500, function(){
            $(this).remove();
            }); }, 5000);
          }
        });
    });
});
</script>
<style type="text/css">

.delete-input{
  color: red;
}
.cursor {
  cursor: pointer;
}

.ul-decorater{
    /*list-style: none;*/
    margin: 0;
    padding-left: 3%;
}

.posicion-mensaje{
  position: absolute;
    right: 0;
    z-index: 99999;
    bottom: 0;
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.3s;
}

.close{
  color: #bf371f;
}

.eliminar-input{
  color: red;
}

  @keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.form-control:disabled, .ingreso__form-input:disabled, .datos-personales__input:disabled, .creacion-solicitud__select:disabled, .creacion-solicitud__form-input:disabled, .form-control[readonly], [readonly].ingreso__form-input, [readonly].datos-personales__input, [readonly].creacion-solicitud__select, [readonly].creacion-solicitud__form-input {
    background-color: white;
    opacity: 1;
}


.edit-composicion{
  background: transparent;
  border: none;
  text-align: center;
  width: 40%;
}

.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #2072BE;
    opacity: 0.1;
}

.input{
  display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #D3D3D3;
    border-radius: 0.25rem;
    -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
}

.listaHov :hover{
background-color: #f8f9fa;
}

.listaHov{
  overflow: scroll;
  max-height: 300px;
}

.listaHovHidden{
overflow:none;
}

.listLine{
  border-left:solid 8px #2072BE;
}

.question-icon{
    margin-right: 5px;
    color: #2072BE;
    font-size: 16px;
    cursor:pointer;
}

@media (min-width: 1200px){
  .datos-personales--cv {
    grid-column: 2/3;
    padding-left: 0;
}
}
</style>
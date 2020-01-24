<template>
  <main class="pn-formulario-1">
    <div class="container" v-if="formulario1">
      <div class="row">
        <!-- LEFT COLUMN -->
        <div class="col-md-6">
          <h3 class="text-uppercase text-primary">Datos Personales</h3>
          <form class="datos-personales">
            <label class="datos-personales__label" for="RUT">RUT*</label>
            <input type="text"  v-on:keyup="updateRutNum()" :class="rutNoValido ? campoValido : campoNoValido" v-model="rut" placeholder="Ej. 11111111-1" id="rutInput" name="rut"  class="datos-personales__input" >
            <!--<label class="datos-personales__label" for="vocativo">Vocativo*</label>
            <select v-model="vocativoSeleccionado" name="vocativo" type="text" id="vocativo" class="datos-personales__input" v-validate="'required'">
              <option value="" disabled>Seleccione uno</option>
              <option v-for="(vocativo, key) in vocativos" :value="vocativo.vocativoId" :key="key">{{ vocativo.vocativo }}</option>
            </select>-->
            <label class="datos-personales__label" for="nombres">Nombres*</label>
            <input v-model="nombre" name="nombres" v-validate="'required'" type="text" id="nombres" class="datos-personales__input">
            <label class="datos-personales__label" for="apellido-pat">Apellido Paterno*</label>
            <input v-model="apellidoPat" type="text" name="apellidoPat" v-validate="'required'" id="apellido-pat" class="datos-personales__input">
            <label class="datos-personales__label" for="apellido-mat">Apellido Materno*</label>
            <input v-model="apellidoMat" type="text" name="apellidoMat" v-validate="'required'" id="apellido-mat" class="datos-personales__input">
            <label class="datos-personales__label" for="fecha-nac">Fecha nacimiento*</label>
            <!--<input v-model="fechaNacimiento" type="date" name="fechaNacimiento"  v-validate="'required'" id="fecha-nac" class="datos-personales__input datos-personales__input--date">-->
           <datepicker v-model="fechaNacimiento" id="fecha" name="Fecha" :disabled-dates="disabledDates" :language="languages[language]" :format="format" :value="fechaNacimiento" input-class="datos-personales__input datos-personales__input--date">  
          </datepicker>
       
            <label class="datos-personales__label" for="nacionalidad">Nacionalidad</label>
            <input v-model="nacionalidad" type="text" id="nacionalidad" class="datos-personales__input datos-personales__input-nacionalidad">
           <!-- <label class="datos-personales__label datos-personales__pasaporte-label invisible"
              for="pasaporte">Pasaporte*</label>
            <input type="text" id="pasaporte"
              class="datos-personales__input  datos-personales__pasaporte-input invisible">-->
            <label class="datos-personales__label" for="sexo">Sexo*</label>
            <select v-model="sexo" id="sexo" class="datos-personales__input" v-validate="'required'" name="sexo">
              <option value="1">Femenino</option>
              <option value="2">Masculino</option>
              <option value="3">Sin especificar</option>
            </select>
            <label class="datos-personales__label" for="edoCivil">Estado civil*</label>
            <select v-model="edoCivilSeleccionado" id="edoCivil" class="datos-personales__input" v-validate="'required'" name="edoCivil">
              <option v-for="(edoCivil, key) in edoCiviles" :value="edoCivil.idEdoCivil" :key="key">{{ edoCivil.edoCivil }}</option>
            </select>
            <label class="datos-personales__label" for="nivelDeEstudios">Nivel de
              estudios</label>
            <!--<input v-model="nivelEstudios" type="text" id="nivelDeEstudios" class="datos-personales__input">-->
            <select v-model="nivelSeleccionado" id="nivelDeEstudios" class="datos-personales__input" >
              <option>Seleccione una opción</option>
              <option v-for="(nivel, key) in nivelEstudios" :value="nivel.idNivel" :key="key">{{ nivel.nivelEstudios }}</option>
            </select>
            <!--<label class="datos-personales__label" for="centroDeEstudios">Centro de
              estudios*</label>
            <input v-model="centroEstudio" type="text" id="centroDeEstudios" class="datos-personales__input" v-validate="'required'" name="centroEstudio">-->
            <label class="datos-personales__label" for="profesion">Profesión*</label>
               <select v-model="profesionSeleccionado" id="profesion" class="datos-personales__input" v-validate="'required'" name="profesion">
              <option>Seleccione una opción</option>
              <option v-for="(profesion, key) in profesiones" :value="profesion.idProf" :key="key">{{ profesion.profesion }}</option>
            </select>
            <!--<input v-model="profesion" type="text" id="profesion" class="datos-personales__input" v-validate="'required'" name="profesion">-->
            <div class="pt-2 w-100 datos-personales--cv">
              <!--<input type="file"  class="d-none" id="cv" ref="filecv"
                accept=".jpg, .jpeg, .png, .pdf, application/pdf, .doc, .docx, .xml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                v-validate="'required'"   @change="onFileSelectedCV">-->
                
                <template v-if="selectedFileCV.length == 0">
                      <input type="file" name="CV" v-validate="''" ref="filecv" id="cv" class="d-none" accept=".jpg, .jpeg, .png, .pdf, application/pdf, .doc, .docx, .xml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                       @change="onFileSelectedCV">
                    </template>
                    <template v-else>
                      <span v-for="(file, key) in selectedFileCV" :value="selectedFileCV" :key="'B-${key}'">
                      Archivo seleccionado: {{ file.name }}
                    </span>
                    <i @click="removeFileCV" style="color: red; max-width: 100%; cursor:pointer" class="fas fa-minus-circle"></i>
                    </template>
               <!--<b-form-file v-model="cv"  class="d-none" id="cv" v-validate="'required'" name="CV"></b-form-file>-->
               <!-- <br> Selected file: {{cv && cv.name}} -->
              <label for="cv" class="d-flex additional-docs__label">
                <div class="datos-personales__icon-container btn--sibling-hover-right mr-2">
                  <img src="@/assets/images/mas.png" alt="Añadir curriculum empresa" class="img-fluid">
                </div>
                <div class="btn--hover-right d-flex align-items-center">
                  <p class="text-small font-weight-bold">Curriculum vitae*</p>
                </div>
              </label>
              <label for="cv" class="d-flex additional-docs__label">
                 <div class="datos-personales__icon-container btn--sibling-hover-right mr-2">
                </div>
                <div class="btn--hover-right d-flex align-items-center">
                  <p class="text-small font-weight-bold">{{cv && cv.name}}</p>
                </div>
              </label>
            </div>
            <label class="datos-personales__label" for="especialidad">Especialidad</label>
            <select v-model="especialidadSeleccionada" id="especialidad" class="datos-personales__input" name="Especialidad">
              <option>Seleccione una opción</option>
              <option v-for="(especialidad, key) in especialidades" :value="especialidad.idEspecialidad" :key="key">{{ especialidad.especialidad }}</option>
            </select>
            <!--<input v-model="especialidad" type="text" id="especialidad" class="datos-personales__input">-->
            <label class="datos-personales__label" for="hobbies">Interés/Hobbies</label>
            <!--<input v-model="intereses" type="text" id="hobbies" class="datos-personales__input">-->
            <select v-model="interesSeleccionado" id="hobbies" class="datos-personales__input" name="Intereses">
              <option>Seleccione una opción</option>
              <option v-for="(interes, key) in intereses" :value="interes.idInt" :key="key">{{ interes.intGls }}</option>
            </select>
            <label class="datos-personales__label" for="empresa">Empresa</label>
           <!-- <input v-model="empresa" type="text" id="empresa" class="datos-personales__input">-->
            <input type="text" id="empresa" class="datos-personales__input" v-model="empresa"  @click="getPersonaJuridicaEmpresa" name="Empresa">
            <input type="text" id="empresaPerid" class="datos-personales__input" v-model="empresaPerId" style="display:none;" />     
            <label class="datos-personales__label" for="cargoEmpresa">Cargo en la empresa</label>
            <!--<input v-model="cargoEmpresa" type="text" id="cargoEmpresa" class="datos-personales__input">-->
            <select v-model="cargoEmpresaSeleccionado" id="cargoEmpresa" class="datos-personales__input" >
              <option>Seleccione una opción</option>
              <option  v-for="(cargoEmpresa, key) in cargoEmpresas" :value="cargoEmpresa.idCargo" :key="key">{{ cargoEmpresa.nombreCargo }}</option>
            </select>

            
          </form>
          <div class="container">
            <div class="row">
              <div class="col-lg-6"></div>
              <div class="col-lg-6">
                 <ul class="mt-2" :class="mostrarListaPersonaJuridicaEmpresaScroll" v-if="mostrarListadoPersonaJuridicaEmpresa" style="padding-left:0">
					            <li v-for="(item, index) in buscarPersonaJuridicaEmpresaFiltro" :key="index" @click="itemClickedPersonaJuridicaEmpresa(item)" class="list-group-item listLine" style="cursor:pointer;">
                        <!--<span>{{ item.rut }}-{{ item.dv }}</span><br>-->
						            <span>{{ item.nombre }} {{ item.apePat }}</span>
					            </li>
                  </ul>
              </div>
            </div>
          </div>
         
        </div> <!-- col-md-6 -->
        <!-- RIGHT COLUMN -->
        <div class="col-md-6 formulario-2__right-column" @click="cerrarScrollPersonaJuridicaEmpresa">
          <h3 class="text-uppercase text-primary redes-digitales__title">Información adicional</h3>
          <form class="redes-digitales__form">
            <label for="sitio-web" class="text-small font-weight-bold">Sitio web</label>
            <input v-model="sitioWeb" type="url" id="sitio-web" class="form-control" name="Web">
          </form>

          <h3 class="text-uppercase text-primary font-weight-bold pt-5">Acompañante</h3>
          <form class="acompanante__form">
            <label for="rut1" class="text-small font-weight-bold">RUT*</label>
            <input v-model="rutAcom" type="text" id="rut1" class="form-control" v-validate="'required'" name="rut2">
            <label for="acompanante-name1" class="text-small font-weight-bold">Nombres*</label>
            <input v-model="nombreAcom" type="text" id="acompanante-name1" class="form-control" v-validate="'required'" name="nombre2">
            <label for="acompanante-apellido-pat1" class="text-small font-weight-bold">Apellido Paterno*</label>
            <input v-model="apellidoPatAcom" type="text" id="acompanante-apellido-pat1" class="form-control" v-validate="'required'" name="apellidoPat2">
            <label for="acompanante-apellido-mat1" class="text-small font-weight-bold">Apellido Materno*</label>
            <input v-model="apellidoMatAcom" type="text" id="acompanante-apellido-mat1" class="form-control" v-validate="'required'" name="apellidoMat2">
            <label for="email1" class="text-small font-weight-bold">Email*</label>
            <input v-model="emailAcom" type="email" id="email1" class="form-control" v-validate="'required'" name="email2">
          </form>
          <div v-show="errors.all().length" class="alert alert-danger posicion-mensaje">

            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>

            <ul class="ul-decorater">
                <li v-for="(error, i) in errors.all()">{{error}}</li>
            </ul>

          </div>

          <div v-if="errorRut.length" class="alert alert-danger posicion-mensaje">

            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>

            <ul class="ul-decorater">
                <li v-for="(error, i) in errorRut">{{error}}</li>
            </ul>

          </div>

          <div  v-if="!rutNoValido" class="alert alert-danger posicion-mensaje">
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>

              <p>El RUT es invalido</p>
          </div>

        </div> <!-- col-md-6 -->

      </div> <!-- row -->

       <div class="creacion-solicitud__buttons py-5">
        <button @click="guardar" class="btn btn-danger btn--big m-2">Guardar y cerrar</button>
        <router-link to="/creacion-de-solicitud" class="btn btn-primary btn--big m-2"><i
            class="fas fa-long-arrow-alt-left fa-lg"></i>Anterior</router-link>
             <button  @click="siguiente" class="btn btn-primary btn--big m-2">Siguiente<i
            class="fas fa-long-arrow-alt-right fa-lg"></i></button>
      </div>  <!-- creacion-solicitud__buttons -->

    </div> <!-- container -->

    <div class="pn-formulario-2" v-if="formulario2 == true">
    <div class="container">
      <div class="row">

        <!-- LEFT COLUMN -->
        <div class="col-lg-7">
          <h3 class="text-uppercase text-primary">Dirección comercial</h3>
          <form class="direccion1__form">
            <label class="text-small font-weight-bold direccion1__label direccion1__label--left"
              for="calle1">Calle*</label>
            <input v-model="calle" v-validate="'required'" name="calle" type="text" id="calle1" class="direccion1__input direccion1__input--left-big form-control" required>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--right-small1"
              for="numero1">Número*</label>
            <input v-model="numeroCalle" v-validate="'required'" name="numero" type="number" id="numero1" class="direccion1__input direccion1__input--right-small1 form-control"
              >
            <label class="text-small font-weight-bold direccion1__label direccion1__label--right-small2"
              for="oficina1">Oficina</label>
            <input v-model="oficina" type="text" id="oficina1" class="direccion1__input direccion1__input--right-small2 form-control">
            <label class="text-small font-weight-bold direccion1__label direccion1__label--left"
              for="continuacion1">Referencia </label>
            <input v-model="continuacion" type="text" id="continuacion1" class="direccion1__input direccion1__input--left form-control">
            <label class="text-small font-weight-bold direccion1__label direccion1__label--left"
              for="pais1">País*</label>
            <input v-model="pais" type="text" id="pais1" class="direccion1__input direccion1__input--left form-control"
              placeholder="Chile" value="Chile" disabled>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--right"
              for="provincia1">Provincia*</label>
            <select v-model="provinciaSeleccionada" v-validate="'required'" name="provincia" @change="getListadoComuna" type="text" id="provincia1" class="direccion1__input direccion1__input--right form-control"
              required>
            <option v-for="(provincia, key) in provincias" :value="provincia.provinciaId" :key="key">{{ provincia.provincia }}</option>
            </select>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--left"
              for="region1">Región*</label>
            <select v-model="regionSeleccionada" v-validate="'required'" name="region" @change="getListadoProvincia" type="text" id="region1" class="direccion1__input direccion1__input--left form-control"
              required>
              <option v-for="(region, key) in regiones" :value="region.regionId" :key="key">{{ region.region }}</option>
            </select>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--right"
              for="comuna1">Comuna*</label>
            <select v-model="comunaSeleccionada" v-validate="'required'" @change="getNombreComuna" name="comuna" type="text" id="comuna1" class="direccion1__input direccion1__input--right form-control"
              required>
              <option v-for="(comuna, key) in comunas" :value="comuna.comunaId" :key="key">{{ comuna.comuna }}</option>
            </select>
          </form>
          <div class="container">
            <div class="row">
              <div class="col-md-6 pt-2">
                <div class="row"  v-for="(inputTel,k) in inputsTel" :key="k">
                  <div
                    class="col-12 col-sm-2 col-md-3 col-lg-4 col-xl-3 d-flex align-items-center direccion__tel-mail-left">
                    <label class="text-small font-weight-bold" for="telefono1">Teléfono*</label>
                  </div>
                  <div class="col-10 col-sm-9 col-md-7 col-lg-6 col-xl-7 direccion__tel-mail-center">
                    <div class="row">
                      <div class="col-lg-3" style="padding-right: 2px;">
                        <select v-model="tipoTelArray[k]" id="tipoTel" class="datos-personales__input" v-validate="'required'" name="Tipo">
                          <option value="0">Fijo</option>
                          <option value="1">Celular</option>
                          <option value="2">Principal</option>
                          <!--<option value="2">Principal</option>-->
                        </select>
                      </div>
                      <div class="col-lg-9">
                        <input type="text" 
                        id="telefono1"
                         v-validate="'required'" 
                         name="telefono" 
                         class="form-control" 
                         v-model="telefonosArray[k]" 
                         required
                         placeholder="ej 9 12345678"
                         @keyup="validarTelefono(k)"
                         >
                        <i class="fas fa-minus-circle eliminar-input" @click="removeTel(k)" v-show="k || ( !k && inputsTel.length > 1)" ></i>
                        <!--<button class="btn btn-primary" @click="validarTelefono(k)">Validar</button>-->
                        <span style="color:red;font-size:14px;" v-if="formatoTelefono">Formato incorrecto</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-2 col-sm-1 col-md-2 direccion__tel-mail-right">
                    <button v-if="mostrarAdd" class="btn--direccion1-tel btn--hover-up"  @click="addTel()"><img src="@/assets/images/mas.png"
                        alt="Añadir teléfono" class="img-fluid"></button>
                  </div>
                </div>
              </div>

              <div class="col-md-6 pt-2">
                <div class="row" v-for="(inputEmail,j) in inputsEmail" :key="j+10">
                  <div class="col-12 col-sm-2 col-md-3 d-flex align-items-center direccion__tel-mail-left">
                    <label class="text-small font-weight-bold" for="mail1">Email*</label>
                  </div>
                  <div class="col-10 col-sm-9 col-md-6 direccion__tel-mail-center">
                    <input type="email" id="mail1" v-validate="'required'" name="email" class="form-control" v-model="emailsArray[j]" required>
                    <i class="fas fa-minus-circle eliminar-input" @click="removeEmail(j)" v-show="j || ( !j && inputsEmail.length > 1)"></i>
                  </div>
                  <div class="col-2 col-sm-1 col-md-3 direccion__tel-mail-right">
                    <button class="btn--direccion1-mail btn--hover-up" @click="addEmail()"><img src="@/assets/images/mas.png"
                        alt="Añadir teléfono" height="33px"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
           <!-- <label class="text-small font-weight-bold direccion1__label direccion1__label--left"
              for="telefono1">Teléfono*</label>
            <div class="direccion1__input direccion1__input--left" v-for="(inputTel,k) in inputsTel" :key="k">-->
            <!--<input v-model="telefonosArray[k]" type="tel" id="telefono1" class="direccion1__input direccion1__input--left direccion1__input--tel form-control">
                <i class="fas fa-minus-circle eliminar-input" @click="removeTel(k)" v-show="k || ( !k && inputsTel.length > 1)" ></i>
            </div>
            <button class="btn--direccion1-tel btn--hover-up"  @click="addTel()"><img src="@/assets/images/mas.png" alt="Añadir teléfono" height="33px"></button>-->
           <!-- <label class="text-small font-weight-bold direccion1__label direccion1__label--right"
              for="mail1">Email*</label>
           <div class="direccion1__input direccion1__input--right" v-for="(inputEmail,j) in inputsEmail" :key="j+10">-->  
            <!--<input v-model="email" type="email" id="mail1"
              class="direccion1__input direccion1__input--right direccion1__input--mail form-control" required>
              <i class="fas fa-minus-circle eliminar-input" @click="removeEmail(j)" v-show="j || ( !j && inputsEmail.length > 1)"></i>
            </div>
            <button class="btn--direccion1-tel btn--hover-up"  @click="addEmail()"><img src="@/assets/images/mas.png" alt="Añadir teléfono"
                height="33px"></button>-->
            <form class="direccion1__form">
            <div class="custom-control custom-checkbox direccion1-check direccion1-check--left">
              <input v-model="correspondencia" type="checkbox" class="custom-control-input" id="dir-correspondencia">
              <label class="custom-control-label text-small pt-1" for="dir-correspondencia">Usar dirección para correspondencia</label>
            </div>
            <div class="custom-control custom-checkbox direccion1-check direccion1-check--right">
              <input v-model="cobranza" type="checkbox" class="custom-control-input" id="dir-cobranza">
              <label class="custom-control-label text-small pt-1" for="dir-cobranza">Usar dirección para cobranzas</label>
            </div>
          </form>

          <h3 class="text-uppercase text-primary pt-5">Dirección particular</h3>
          <form class="direccion1__form">
            <label class="text-small font-weight-bold direccion1__label direccion1__label--left"
              for="calle2">Calle*</label>
            <input v-model="callePar" v-validate="'required'" name="calle" type="text" id="calle2" class="direccion1__input direccion1__input--left-big form-control" required>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--right-small1"
              for="numero2">Número*</label>
            <input v-model="numeroCallePar" v-validate="'required'" name="numero" type="number" id="numero2" class="direccion1__input direccion1__input--right-small1 form-control"
              required>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--right-small2"
              for="oficina2">Oficina</label>
            <input v-model="oficinaPar" type="text" id="oficina2" class="direccion1__input direccion1__input--right-small2 form-control">
            <label class="text-small font-weight-bold direccion1__label direccion1__label--left"
              for="continuacion2">Puntos de Referencia</label>
            <input v-model="continuacionPar" type="text" id="continuacion2" class="direccion1__input direccion1__input--left form-control">
            <label class="text-small font-weight-bold direccion1__label direccion1__label--left"
              for="pais2">País*</label>
            <input v-model="paisPar" type="text" id="pais2" class="direccion1__input direccion1__input--left form-control"
              placeholder="Chile" value="Chile" disabled>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--right"
              for="provincia2">Provincia*</label>
            <select  v-model="provinciaSeleccionadaPar"  @change="getListadoComunaPar" v-validate="'required'" name="provincia" type="text" id="provincia2" class="direccion1__input direccion1__input--right form-control"
              required>
              <option v-for="(provincia, key) in provinciasPar" :value="provincia.provinciaId" :key="key">{{ provincia.provincia }}</option>
              </select>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--left"
              for="region2">Región*</label>
            <select v-model="regionSeleccionadaPar" @change="getListadoProvinciaPar" type="text" v-validate="'required'" name="region" id="region2" class="direccion1__input direccion1__input--left form-control"
              required>
              <option v-for="(region, key) in regionesPar" :value="region.regionId" :key="key">{{ region.region }}</option>
            </select>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--right"
              for="comuna2">Comuna*</label>
            <select v-model="comunaSeleccionadaPar"  type="text" id="comuna2" v-validate="'required'" name="comuna" class="direccion1__input direccion1__input--right form-control"
              >
              <option v-for="(comuna, key) in comunasPar" :value="comuna.comunaId" :key="key">{{ comuna.comuna }}</option>
              </select>
          </form>
           <!-- <label class="text-small font-weight-bold direccion1__label direccion1__label--left"
              for="telefono2">Teléfono*</label>
            <div class="direccion1__input direccion1__input--left" v-for="(inputTelPar,z) in inputsTelPar" :key="z+10">  
            <input v-model="telefonoPar" type="tel" id="telefono2"
              class="direccion1__input direccion1__input--left direccion1__input--tel form-control" required>
               <i class="fas fa-minus-circle eliminar-input" @click="removeTelefonoPar(z)" v-show="z || ( !z && inputsTelPar.length > 1)"></i>
            </div>  
            <button class="btn--direccion1-tel btn--hover-up"  @click="addTelefonoPar()"><img src="@/assets/images/mas.png" alt="Añadir teléfono"
                height="33px"></button>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--right"
              for="mail2">Email*</label>
            <div class="direccion1__input direccion1__input--right" v-for="(inputEmailPar,p) in inputsEmailPar" :key="p">
            <input v-model="emailPar" type="email" id="mail2"
              class="direccion1__input direccion1__input--right direccion1__input--mail form-control" required>
              <i class="fas fa-minus-circle eliminar-input" @click="removeEmailPar(p)" v-show="p || ( !p && inputsEmailPar.length > 1)"></i>
            </div>
            <button class="btn--direccion1-tel btn--hover-up" @click="addEmailPar()"><img src="@/assets/images/mas.png" alt="Añadir teléfono"
                height="33px"></button>-->
           <div class="container">
            <div class="row">
              <div class="col-md-6 pt-2">
                <div class="row" v-for="(inputTelPar,z) in inputsTelPar" :key="z+10">
                  <div
                    class="col-12 col-sm-2 col-md-3 col-lg-4 col-xl-3 d-flex align-items-center direccion__tel-mail-left">
                    <label class="text-small font-weight-bold" for="telefono2">Teléfono*</label>
                  </div>
                  <div class="col-10 col-sm-9 col-md-7 col-lg-6 col-xl-7 direccion__tel-mail-center">
                    <div class="row">
                      <div class="col-lg-3" style="padding-right: 2px;">
                      <select v-model="tipoTelParArray[z]" id="tipoTelPar" class="datos-personales__input" v-validate="'required'" name="Tipo">
                          <option value="0">Fijo</option>
                          <option value="1">Celular</option>
                          <!--<option value="2">Principal</option>-->
                        </select>
                      </div>

                      <div class="col-lg-9">
                      <input v-model="telefonosParArray[z]"  placeholder="ej 9 12345678" v-validate="'required'" name="telefono" type="tel" id="telefono2" class="form-control" required>
                     <i class="fas fa-minus-circle eliminar-input" @click="removeTelefonoPar(z)" v-show="z || ( !z && inputsTelPar.length > 1)"></i>
                      </div> 
                      
                    </div>
                    
                    
                  </div>
                  <div class="col-2 col-sm-1 col-md-2 direccion__tel-mail-right">
                    <button class="btn--direccion1-tel btn--hover-up"  @click="addTelefonoPar()"><img src="@/assets/images/mas.png"
                        alt="Añadir teléfono" class="img-fluid"></button>
                  </div>
                </div>
              </div>

              <div class="col-md-6 pt-2">
                <div class="row" v-for="(inputEmailPar,p) in inputsEmailPar" :key="p">
                  <div class="col-12 col-sm-2 col-md-3 d-flex align-items-center direccion__tel-mail-left">
                    <label class="text-small font-weight-bold" for="mail2">Email*</label>
                  </div>
                  <div class="col-10 col-sm-9 col-md-6 direccion__tel-mail-center">
                    <input v-model="emailsParArray[p]" type="email" v-validate="'required'" name="email" id="mail2" class="form-control" required>
                     <i class="fas fa-minus-circle eliminar-input" @click="removeEmailPar(p)" v-show="p || ( !p && inputsEmailPar.length > 1)"></i>
                  </div>
                  <div class="col-2 col-sm-1 col-md-3 direccion__tel-mail-right">
                    <button class="btn--direccion1-mail btn--hover-up" @click="addEmailPar()"><img src="@/assets/images/mas.png"
                        alt="Añadir teléfono" height="33px"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>     
           <form class="direccion1__form">
            <div class="custom-control custom-checkbox direccion1-check direccion1-check--left">
              <input v-model="correspondenciaPar" type="checkbox" class="custom-control-input" id="dir-correspondencia2">
              <label class="custom-control-label text-small pt-1" for="dir-correspondencia2">Usar dirección para
                correspondencia</label>
            </div>
            <div class="custom-control custom-checkbox direccion1-check direccion1-check--right">
              <input v-model="cobranzaPar" type="checkbox" class="custom-control-input" id="dir-cobranza2">
              <label class="custom-control-label text-small pt-1" for="dir-cobranza2">Usar dirección para
                cobranzas</label>
            </div>
          </form>
        </div> <!-- col-md-6 -->

        <!-- RIGHT COLUMN -->
        <div class="col-lg-5">
           <div v-show="errors.all().length" class="alert alert-danger posicion-mensaje">

            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>

            <ul class="ul-decorater">
                <li v-for="(error, i) in errors.all()">{{error}}</li>
            </ul>

          </div>
        </div> <!-- col-md-6 -->
       
      </div> <!-- row -->

      <div class="creacion-solicitud__buttons py-5">
        <button @click="guardar" class="btn btn-danger btn--big m-2">Guardar y cerrar</button>
        <button @click="frm1" class="btn btn-primary btn--big m-2"><i
            class="fas fa-long-arrow-alt-left fa-lg"></i>Anterior</button>
        
        <button @click="siguiente2" class="btn btn-primary btn--big m-2">Siguiente<i
            class="fas fa-long-arrow-alt-right fa-lg"></i></button>
      </div>  <!--creacion-solicitud__buttons -->

    </div> <!-- container -->
  </div> <!-- formulario-2 -->


    <div class="pn-formulario-3" v-show="formulario3 == true">
    <div class="container">
      <div class="row">

        <!-- LEFT COLUMN -->
        <div class="col-md-7 col-lg-6">
          <h3 class="text-primary text-uppercase font-weight-bold">Composición accionaria</h3>
         <form action="">
            <div class="form-group">
              <div class="row">
               

                <div class="col-lg-3">
                  <label for="rut" class="accionarios-participacion__label text-small font-weight-bold">RUT</label>
                  <input v-model="rutPersonaJuridica" id="rut"  @click="getPersonaJuridica" :disabled="disabled == 1" type="text" class="form-control">
                  <!--<input type="text" class="patrocinante__input form-control" v-model="rutComp" style="display:none;">-->
                    <ul class="mt-2" :class="mostrarListaPersonaJuridicaScroll" v-if="mostrarListadoPersonaJuridica" style="width:150%;padding-left:0">
					            <li v-for="(item, index) in buscarPersonaJuridicaFiltro" :key="index" @click="itemClickedPersonaJuridica(item)" class="list-group-item listLine" style="cursor:pointer;">
                        <span>{{ item.rut }}-{{ item.dv }}</span><br>
						            <span>{{ item.nombre }} {{ item.apePat }}</span>
					            </li>
			              </ul>
                </div>

                <div class="col-lg-3">
                  <label for="porcentaje"
                  class="accionarios-participacion__label text-small 
                  font-weight-bold">Razón Social</label>
                  <input :disabled="disabled == 1" v-model="razonSocial"  
                  id="razonSocial" type="text" 
                  class="form-control accionarios-participacion__input">
                </div>
                <div class="col-lg-3" @click="cerrarScrollPersonaJuridica">
                  <label for="porcentaje"
                  class="accionarios-participacion__label text-small 
                  font-weight-bold">Porcentaje</label>
                  <input v-model="porcentaje" ref="porcentaje" 
                  id="porcentaje" type="number" 
                  class="form-control accionarios-participacion__input">
                </div>

                <div class="col-lg-3" style="padding-left:0%;" @click="cerrarScrollPersonaJuridica">
                <button type="button" 
                class="btn--accionarios-participacion btn--hover-up" 
                @click="buscar" style="margin-top:18%;"><img src="@/assets/images/mas.png"
                alt="Adjuntar declaración de impuestos a la renta" 
                height="33px"></button>
                </div>

                <!--<div class="col-lg-4" style="padding-left:0%;" @click="cerrarScrollPersonaJuridica">
                <button type="button" 
                class="btn btn-primary" 
                @click="crearPersonaJuridicaNueva" style="margin-top:13%;"></button>
                </div>-->

              </div>
            </div>
          </form>

          <!--<form class="accionarios-participacion__form accionarios-participacion__form--pnatural">
            <label for="rut" class="accionarios-participacion__label text-small font-weight-bold">RUT</label>
            <input v-model="rutComp" id="rut" :disabled="disabled == 1" type="text" class="form-control accionarios-participacion__input">
            <label for="name" class="accionarios-participacion__label text-small font-weight-bold">Razón social</label>
            <input v-model="razonSocial" id="name" :disabled="disabled == 1" type="text" class="form-control accionarios-participacion__input" readonly>
            <label for="porcentaje"
              class="accionarios-participacion__label text-small font-weight-bold">Porcentaje</label>
            <input v-model="porcentaje" ref="porcentaje" id="porcentaje" type="number" class="form-control accionarios-participacion__input">
            <button type="button" class="btn--accionarios-participacion btn--hover-up" @click="buscar"><img src="@/assets/images/mas.png"
                alt="Adjuntar declaración de impuestos a la renta" height="33px"></button>
          </form>-->

          <div class="table-responsive pt-3" @click="cerrarScrollPersonaJuridica">
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
                  <td>{{ com.rutPersonaJuridica }}-{{ com.dvComp }}</td>
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
        <div class="col-md-5 col-lg-6" @click="cerrarScrollPersonaJuridica">
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
                <h3 style="padding:5%;">¿Seguro que desea editar el porcentaje con el RUT {{ rutPersonaJuridica }}</h3>
              </div>
              <div class="d-block text-center">
                <b-button size="sm" variant="primary" @click="aceptarEdicion()">Si</b-button>
                <b-button size="sm" variant="danger" @click="cancelarEdicion()">No</b-button></div>
            </b-modal>
            </div>

            <div>
            <b-modal ref="modal-eliminar" hide-footer title="Eliminar Persona">
              <div class="d-block text-center">
                <h3 style="padding:5%;">¿Seguro que desea eliminar a la persona con el RUT {{ rutPersonaJuridica }}?</h3>
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
      <input type="text" class="form-control" placeholder="" v-model="nombrePersonaJuridicaNueva">
    </div>
    <div class="col">
      <label class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold" for="nombre">RUT</label>
      <input type="text" class="form-control" placeholder="" v-model="rutPersonaJuridicaNueva">
    </div>
    <div class="col">
      <label class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold" for="nombre">DV</label>
      <input type="text" class="form-control" placeholder="" v-model="dvPersonaJuridicaNueva">
    </div>
    </div>
    <!-- <div class="row">
    <div class="col">
      <label class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold" for="porcentaje">Porcentaje</label>
      <input type="text" class="form-control" placeholder="">
    </div>
    <div class="col">
      <label class="personas-asociadas-form__label personas-asociadas-form__label--left text-small font-weight-bold" for="social">Razón Social</label>
      <input type="text" class="form-control" placeholder="">
    </div>
    </div> -->
  <button  class="btn btn-danger" @click="cerrarCreacionPersonaJuridica" style="float:right; padding: 2% 5% 2% 5%; margin-top: 2%; margin-left:2%;">Cerrar</button>  
  <button  class="btn btn-primary" @click="crearPersonaJuridicaNueva" style="float:right; padding: 2% 5% 2% 5%; margin-top: 2%;">Crear</button>
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
        <button @click="guardar" class="btn btn-danger btn--big m-2">Guardar y cerrar</button>
        <button @click="frm2" class="btn btn-primary btn--big m-2"><i
            class="fas fa-long-arrow-alt-left fa-lg"></i>Anterior</button>
        
        <button @click="siguiente3" class="btn btn-primary btn--big m-2">Siguiente<i
            class="fas fa-long-arrow-alt-right fa-lg"></i></button>
      </div>  <!-- creacion-solicitud__buttons -->
    </div>
</div>    


 <div class="pn-formulario-4" v-show="formulario4 == true">
    <div class="container">
      <div class="row">

        <!-- LEFT COLUMN -->
        <div class="col-md-6">
          <h3 class="text-primary text-uppercase font-weight-bold">Selección de comités</h3>
          <p class="text-small text-primary font-weight-bold pt-2 pb-2">Seleccione el o los comités en que desea
            inscribirse:</p>
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-5 col-md-12 col-xl-5">
                <p class="text-uppercase">Infraestructura</p>
                <form>
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" v-model="contratistasGenerales" class="custom-control-input" id="contratistas-gen">
                    <label class="custom-control-label text-small pt-1" for="contratistas-gen">Contratistas
                      Generales</label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" v-model="obrasInfra" class="custom-control-input" id="infraest-publica">
                    <label class="custom-control-label text-small pt-1" for="infraest-publica">Obras Infraestructura
                      Pública</label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" v-model="conseciones" class="custom-control-input" id="concesiones">
                    <label class="custom-control-label text-small pt-1" for="concesiones">Concesiones</label>
                  </div>
                </form>
              </div>
              <div class="col-sm-4 col-md-12 col-xl-4">
                <p class="text-uppercase">Vivienda</p>
                <form>
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" v-model="inmobiliario" class="custom-control-input" id="inmobiliario">
                    <label class="custom-control-label text-small pt-1" for="inmobiliario">Inmobiliario</label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" v-model="vivienda" class="custom-control-input" id="vivienda">
                    <label class="custom-control-label text-small pt-1" for="vivienda">Vivienda</label>
                  </div>
                </form>
              </div>
              <div class="col-sm-3 col-md-12 col-xl-3">
                <p class="text-uppercase">Suministros</p>
                <form>
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" v-model="proveedores" class="custom-control-input" id="proveedores">
                    <label class="custom-control-label text-small pt-1" for="proveedores">Proveedores</label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" v-model="industriales" class="custom-control-input" id="industriales">
                    <label class="custom-control-label text-small pt-1" for="industriales">Industriales</label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" v-model="especialidades" class="custom-control-input" id="especialidades">
                    <label class="custom-control-label text-small pt-1" for="especialidades">Especialidades</label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> <!-- col-md-6 -->

        <!-- RIGHT COLUMN -->
        <div class="col-md-6">
        </div> <!-- col-md-6 -->
      </div> <!-- row -->

        <div class="creacion-solicitud__buttons py-5 mt-5">
        <button @click="guardar" class="btn btn-danger btn--big m-2">Guardar y cerrar</button>
        <button @click="frm3" class="btn btn-primary btn--big m-2"><i
            class="fas fa-long-arrow-alt-left fa-lg"></i>Anterior</button>
        
        <button @click="siguiente4" class="btn btn-primary btn--big m-2">Siguiente<i
            class="fas fa-long-arrow-alt-right fa-lg"></i></button>
      </div>  <!-- creacion-solicitud__buttons -->

    </div> <!-- container -->
  </div> 


 <div class="pn-formulario-5" v-show="formulario5 == true"> 
    <div class="container">
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
  <div class="row">
    <div class="col-lg-6">
      <a href="" download class="patrocinante__download">
              <img src="@/assets/images/mas.png" alt="Descargar formulario" width="33px" class="btn--sibling-hover-right">
              <span class="font-weight-bold text-small pl-1 btn--hover-right">Descargar formulario</span>
            </a>
            <div class="patrocinante__attachment pt-2">
              <!--<input type="file" class="d-none" id="respaldo1" required>-->
              <template v-if="selectedRespaldo1.length == 0">
                      <input type="file" v-validate="'required'" ref="respaldo1" id="respaldo1" class="d-none" accept=".jpg, .jpeg, .png, .pdf, application/pdf, .doc, .docx, .xml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      required @change="onFileSelectedRespaldo1">
                    </template>
                    <template v-else>
                      <span v-for="(file2, key) in selectedRespaldo1" :value="selectedRespaldo1" :key="'A-${key}'">
                      Archivo seleccionado: {{ file2.name }}
                    </span>
                    <i @click="removeRespaldo1" style="color: red; max-width: 100%; cursor:pointer" class="fas fa-minus-circle"></i>
                    </template>
              <label for="respaldo1" class="d-flex patrocinante__attachment-label">
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
  <div class="row"  @click="">
    <div class="col-lg-6">
      <a href="" download class="patrocinante__download">
              <img src="@/assets/images/mas.png" alt="Descargar formulario" width="33px" class="btn--sibling-hover-right">
              <span class="font-weight-bold text-small pl-1 btn--hover-right">Descargar formulario</span>
            </a>
            <div class="patrocinante__attachment pt-2">
              <!--<input type="file" class="d-none" id="respaldo" required>-->
              <template v-if="selectedRespaldo2.length == 0">
                      <input type="file" v-validate="'required'" ref="respaldo2" id="respaldo2" class="d-none" accept=".jpg, .jpeg, .png, .pdf, application/pdf, .doc, .docx, .xml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      required @change="onFileSelectedRespaldo2">
                    </template>
                    <template v-else>
                      <span v-for="(file3, key) in selectedRespaldo2" :value="selectedRespaldo2" :key="'C-${key}'">
                      Archivo seleccionado: {{ file3.name }}
                    </span>
                    <i @click="removeRespaldo2" style="color: red; max-width: 100%; cursor:pointer" class="fas fa-minus-circle"></i>
                    </template>
              <label for="respaldo2" class="d-flex patrocinante__attachment-label">
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
        <button @click="frm4" class="btn btn-primary btn--big m-2"><i
            class="fas fa-long-arrow-alt-left fa-lg"></i>Anterior</button>
        
        <button @click="siguiente5" class="btn btn-primary btn--big m-2">Siguiente<i
            class="fas fa-long-arrow-alt-right fa-lg"></i></button>
      </div>  <!-- creacion-solicitud__buttons -->

    </div> <!-- container -->
  </div>


  <div class="pn-formulario-6" v-show="formulario6 == true">
       
    <div class="container">
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
                              <input type="checkbox" v-model="terms" class="custom-control-input" id="leido1" required>
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
                              <input type="checkbox" v-model="terms2" class="custom-control-input" id="leido2" required>
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
                              <input type="checkbox" v-model="terms3" class="custom-control-input" id="leido3" required>
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
          <div class="col-md-6">
            <h3 class="text-primary text-uppercase compromisos__confirmacion-title">Confirmación</h3>
            <p class="text-muted text-small font-weight-bold">Antes de enviar su postulación revise toda la información
              adjunta en los formularios.</p>

            <div class="card mt-3">
              <div class="card-header text-white text-uppercase bg-primary py-3 px-5">Datos del solicitante</div>
              <div class="card-body pt-4 pb-5 px-5 card__form">
                <p class="card__form-label">Nombre: <span class="card__form-data">{{ nombre }} {{ apellidoPat }}</span></p>
                <p class="card__form-label">Teléfono: <span class="card__form-data" v-for="telefono in telefonosArray">{{ telefono }}</span></p>
                <p class="card__form-label">Email: <span class="card__form-data" v-for="email in emailsArray">{{ email }}</span></p>
                <p class="card__form-label">Empresa: <span class="card__form-data">{{ empresa }}</span></p>
                <p class="card__form-label">Dirección: <span class="card__form-data">{{ calle }} {{ numeroCalle }}, {{ nombreComunaSelect }}, {{ nombreProvinciaSelect }}
                </span></p>
              </div>
            </div>

            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="enviar-copia" v-model="enviarCopiaMail">
              <label class="custom-control-label font-weight-bold text-muted pt-1" for="enviar-copia">Enviar una copia
                de los datos entregados en la solicitud a mi correo electrónico</label>
            </div>
          </div> <!-- col-md-6 -->
        </div> <!-- row -->
        <span v-if="msgTerm" class="font-weight-bold pt-1" style="color:red">*Debe acpetar términos y condiciones</span>
        <div class="d-flex justify-content-center pt-5">
          <button type="submit" :disabled="isDisabled" class="btn btn--big btn--submit text-white text-uppercase" @click="enviarPostulacion()">Enviar postulación</button>
        </div>
      </form>

      <div class="creacion-solicitud__buttons py-5 mt-5">
        <a href="" class="btn btn-danger btn--big m-2">Guardar y cerrar</a>
        <button @click="frm5" class="btn btn-primary btn--big m-2"><i
            class="fas fa-long-arrow-alt-left fa-lg"></i>Anterior</button>
        
        <router-link to="/" class="btn btn-primary btn--big m-2">Siguiente<i
            class="fas fa-long-arrow-alt-right fa-lg"></i></router-link>
      </div>  <!-- creacion-solicitud__buttons -->

     

    </div> <!-- container -->
  </div> 
  </main> <!-- formulario-2 -->
</template>

<script>


import { mapState, mapMutations } from 'vuex'
import Vue from 'vue'
import VeeValidate from "vee-validate";
import Validator from "vee-validate";
import es from 'vee-validate/dist/locale/es';
import store from '@/store.js';
import Datepicker from 'vuejs-datepicker';
import * as lang from "vuejs-datepicker/src/locale";
import moment from 'moment';
import Suggestions from 'v-suggestions'
import 'v-suggestions/dist/v-suggestions.css' // you can import the stylesheets also (optional)

Vue.component('suggestions', Suggestions)

Vue.use(require('vue-moment'));

Vue.use(VeeValidate, {
	classes: true,
	classNames: {
		valid: "is-valid",
		invalid: "is-invalid",
	},
	
  events: "change|blur|keyup",
  
  
});

VeeValidate.Validator.localize('es',es);

export default{
  name: 'formularioPersonaNatural',
  components: {
    Datepicker   
  },

data () {
  return {

      /*query: '',
      countries: [],
      selectedCountry: null,
      options: {},
      formateo:[],*/
      

    /*listaGente:[
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
    ],*/
    
    language: "es",
    languages: lang,
    format:"dd-MM-yyyy",
    disabledDates:{
     from: new Date() //Deshabilita fechas futuras
    },

    
     //Inicializacion del Objeto principal para guardar y actualizar todos los formularios

     personaNatural:[{
       datosPersonales:{
         
       },
       direcciones:{
         comercial:{},
         particular:{}

       },
       composicion:{
         com: []
       },
       comites:{

       },
       patrocinantes:{

       },

       compromisos:{

       }
  }],
    
    //personaNatural:[],
    
    //Data para el formulario Datos Principales formulario1
     rut:null,
     errorRut:[],
     rutNoValido: true,
     campoNoValido: 'rut-invalido',
    campoValido: 'rut-valido',
    camposCorrectos: false,
     vocativos:[],
     vocativoSeleccionado:'',
     nombre:'',
     apellidoPat:'',
     apellidoMat:'',
     fechaNacimiento: new Date(),
     nacionalidad:'',
     sexo:'',
     edoCivilSeleccionado:'',
     edoCiviles:[],
     nivelSeleccionado:'',
     nivelEstudios:[],
     centroEstudio:'',
     profesionSeleccionado:'',
     profesiones:[],
     especialidadSeleccionada:'',
     especialidades:[],
     cv:null,
     selectedFileCV:[],
     filecv:'',
     interesSeleccionado:'',
     intereses: [],
     empresa:'',
     listaPersonaJuridicaEmpresa:[],
     empresaPerId:'',
     mostrarListadoPersonaJuridicaEmpresa:false,
     mostrarListaPersonaJuridicaEmpresaScroll:'listaHov',
     cargoEmpresaSeleccionado:'',
     cargoEmpresas: [],
     sitioWeb:'',
     rutAcom:'',
     nombreAcom:'',
     apellidoPatAcom:'',
     apellidoMatAcom:'',
     emailAcom:'',

     //Data para el formulario de direcciones formulario2
      calle:'',
      numeroCalle:'',
      oficina:'',
      continuacion:'',
      pais:'',
      provincias:[],
      provinciaSeleccionada:'',
      nombreProvinciaSelect:'',
      regiones:[],
      //nombreRegionSelect:'',
      regionSeleccionada:'',
      comunas:[],
      comunaSeleccionada:'',
      nombreComunaSelect:'',
      provinciasPar:[],
      provinciaSeleccionadaPar:0,
      regionesPar:[],
      regionSeleccionadaPar:0,
      comunasPar:[],
      comunaSeleccionadaPar:0,
      telefono:'',
      codigoArea:'',
      selectTipoTel:'',
      tipoTel:0,
      telEx:'',
      email:'',
      correspondencia:false,
      cobranza:false,
      callePar:'',
      numeroCallePar:'',
      oficinaPar:'',
      continuacionPar:'',
      paisPar:'',
      provinciaPar:'',
      regionPar:'',
      comunaPar:'',
      telefonoPar:'',
      tipoTelPar:0,
      emailPar:'',
      correspondenciaPar:false,
      cobranzaPar:false,
      telefonosArray:[],
      tipoTelArray:[],
      emailsArray:[],
      telefonosParArray:[],
      tipoTelParArray:[],
      emailsParArray:[],
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
      
      inputsTelPar: [
        {
          telefonoPar:''
        }
      ],
      
      inputsEmailPar: [
        {
          emailPar:''
        }
      ],
      formatoTelefono: false,
      mostrarAdd: true,


//Data para el formulario Composicion Accionaria
      listaPersonaJuridica:[],
      rutComp:'',
      dvComp:'',
      razonSocial:'',
      porcentaje:0,
      composicion:[],
      formRegistrarPersona: false,
      disabled: 0,
      encuentra:'',
      editPor: false,
      respuesta: false,
      mostrarListaPersonaJuridicaScroll:'listaHov',
      mostrarListadoPersonaJuridica:false,
      rutPersonaJuridica:'',
      nombrePersonaJuridicaNueva:'',
      rutPersonaJuridicaNueva:'',
      dvPersonaJuridicaNueva:'',
      personasJuridicasNuevas:[],
      juridicoEnArray: false,


 //Data para Selección de comités
      contratistasGenerales:false,
      obrasInfra:false,
      conseciones:false,
      inmobiliario:false,
      vivienda:false,
      proveedores:false,
      industriales:false,
      especialidades:false, 
            
//Data Compromisos
      terms: false,
      terms2: false,
      terms3: false,
      msgTerm: true,

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
       respaldo1:'',
       selectedRespaldo1:[],
       respaldo2:'',
       selectedRespaldo2:[],

       //Data compromisos
       enviarCopiaMail: false
       
    }
  },

  methods:{

    ...mapMutations(['frm1','frm2','frm3', 
                     'frm4','frm5','frm6']),

                    
     /*onCountryInputChange (query) {
       //console.log(query);
      if (this.query.trim().length === 0) {
        return null
      }
      // return the matching countries as an array
      //return this.countries.filter((asd) => asd.nombre.includes(this.query));
      return this.countries.filter((country) => {
        //console.log(country);
        return country.toLowerCase().includes(this.query.toLowerCase()) 
      })
      
    },*/
    /*onCountrySelected (item) {
      console.log(item);
      this.selectedCountry = item
    },*/
    /*onSearchItemSelected (item) {
      console.log(item);
      this.query = item
    },*/              

    
    siguiente(){
      /*this.$validator.validate()
				.then(esValido => {
          if (esValido) {*/
          this.checkForm();
          
          if(this.camposCorrectos == true && this.rutNoValido == true){
            
            this.guardar();
            this.frm2();
            console.log("Puede Pasar");
          }
            
          else {

            if(this.rutNoValido == true){
              alert("Debe introducir un RUT valido");
            }else{
              if(this.camposCorrectos == false && this.rutNoValido == false){
                alert("Debe llenar campos requeridos");
              }
              
            }
						
					}
          /*} else {
						alert("Debe llenar campos requeridos");
					}
        });  */
    },                

    siguiente2(){
      /*this.$validator.validate()
				.then(esValido => {
					if (esValido) {*/

            this.guardar();
            this.frm3();
            console.log("Puede Pasar");

         /* } else {
						alert("Debe llenar campos requeridos");
					}
        });  */
    },

    siguiente3(){
     /* this.$validator.validate()
				.then(esValido => {
					if (esValido) {*/

            this.guardar();
            this.frm4();
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
            this.frm5();
            console.log("Puede Pasar");

         /* } else {
						alert("Debe llenar campos requeridos");
					}
        });  */
    },

    siguiente5(){
      /*this.$validator.validate()
				.then(esValido => {
					if (esValido) {*/

            this.guardar();
            this.frm6();
            console.log("Puede Pasar");

        /* } else {
						alert("Debe llenar campos requeridos");
					}
        });  */
    },
    
    addTel() {

      if(this.inputsTel.length <= 2){

            this.inputsTel.push({ telEx: '' });
            this.inputsTel.reverse();
           
      }
            //mostrarAdd = false;
            
        },
    removeTel(index) {
            this.inputsTel.splice(index, 1);
        },

    addEmail() {
            
            if(this.inputsEmail.length <= 2){
              this.inputsEmail.push({ email: '' });
              this.inputsEmail.reverse();
            }
            
        },
    removeEmail(index) {
            this.inputsEmail.splice(index, 1);
        },
    
    addTelefonoPar() {
            if(this.inputsTelPar.length <= 2){
            this.inputsTelPar.push({ telefonoPar: '' });
            this.inputsTelPar.reverse();
            }
        },

    removeTelefonoPar(index) {
            this.inputsTelPar.splice(index, 1);
        },

    addEmailPar() {
            if(this.inputsEmailPar.length <= 2){
            this.inputsEmailPar.push({ emailPar: '' });
            this.inputsEmailPar.reverse();
            }
        },
    removeEmailPar(index) {
            this.inputsEmailPar.splice(index, 1);
        },

    /*agregarComposicion(){
      this.composicion.push({
        rutComp: this.rutComp,
        razonSocial: this.razonSocial,
        porcentaje: this.porcentaje
      });

      this.rutComp = '';
      this.razonSocial = '';
      this.porcentaje = '';

      
    },*/
    

    guardar: function(){

     this.onUploadCV();
     this.onUploadRespaldo1();
     this.onUploadRespaldo2();
      /*this.$validator.validate()
				.then(esValido => {
					if (esValido) {*/
     this.personaNatural.push({
        datosPersonales:{
        //rutGlobal: this.$store.state.rutGlobal, 
        rut: this.rut,
        vocativo: this.vocativoSeleccionado,
        nombre: this.primeraMayuscula(this.nombre.toLowerCase()),
        apellidoPat: this.primeraMayuscula(this.apellidoPat.toLowerCase()),
        apellidoMat: this.primeraMayuscula(this.apellidoMat.toLowerCase()),
        fechaNacimiento: moment(this.fechaNacimiento).format('DD-MM-YYYY'),
        nacionalidad: this.primeraMayuscula(this.nacionalidad.toLowerCase()),
        sexo: this.sexo,
        edoCivil: this.edoCivilSeleccionado,
        nivelEstudios: this.nivelSeleccionado,
        centroEstudio: this.centroEstudio,
        profesion: this.profesionSeleccionado,
        especialidad: this.especialidadSeleccionada,
        cv: this.cv,
        intereses: this.interesSeleccionado,
        empresa: this.empresa,
        empresaPerId : this.empresaPerId,
        cargoEmpresa:  this.cargoEmpresaSeleccionado,
        sitioWeb: this.sitioWeb,
        rutAcom: this.rutAcom,
        nombreAcom: this.primeraMayuscula(this.nombreAcom.toLowerCase()),
        apellidoPatAcom: this.primeraMayuscula(this.apellidoPatAcom.toLowerCase()),
        apellidoMatAcom: this.primeraMayuscula(this.apellidoMatAcom.toLowerCase()),
        emailAcom: this.emailAcom
        },
        
        direcciones:{
          comercial:{
          calle: this.primeraMayuscula(this.calle.toLowerCase()),
          numero: this.numeroCalle,
          oficina: this.oficina,
          continuacion: this.primeraMayuscula(this.continuacion.toLowerCase()),
          region: this.regionSeleccionada,
          provincia: this.provinciaSeleccionada,
          comuna: this.comunaSeleccionada,
          telefono: this.telefonosArray,
          tipoTel: this.tipoTelArray,
          email: this.emailsArray,
          correspondencia: this.correspondencia,
          cobranza: this.cobranza
        },
        particular:{
            calle: this.primeraMayuscula(this.callePar.toLowerCase()),
            numero: this.numeroCallePar,
            oficina: this.oficinaPar,
            continuacion: this.primeraMayuscula(this.continuacionPar.toLowerCase()),
            region: this.regionSeleccionadaPar,
            provincia: this.provinciaSeleccionadaPar,
            comuna: this.comunaSeleccionadaPar,
            telefono: this.telefonosParArray,
            tipoTel: this.tipoTelParArray,
            email: this.emailsParArray,
            correspondenciaPar: this.correspondenciaPar,
            cobranzaPar: this.cobranzaPar

          }
          
        },
        composicion:{
          com: this.composicion
            /*rutComp: this.composicion[0].rutComp,
            porcentaje: this.porcentaje*/
          
        },
        comites:{
          infraestructura:{
            contratistasGenerales:this.contratistasGenerales,
            obrasInfra: this.obrasInfra,
            conseciones: this.conseciones
          },
          vivienda:{
            inmobiliario: this.inmobiliario,
            vivienda: this.vivienda
          },
          suministros:{
             proveedores: this.proveedores,
             industriales: this.industriales,
             especialidades: this.especialidades
          }
        },
        patrocinantes:{
          patrocinante1: this.perIdPatrocinante,
          patrocinador1: this.perIdPatrocinador,
          patrocinante2: this.perIdPatrocinante2,
          patrocinador2: this.perIdPatrocinador2
        },
        compromisos:{
          enviarCopiaMail: this.enviarCopiaMail
        }
      });
      
      console.log(this.personaNatural);
					/*} else {
							alert("Debe llenar campos requeridos");
					}
        });  */   
    },


  buscar: function (indice){
    

  if(this.rutPersonaJuridica== ''){
    alert("Debe llenar campo rut");
  }else{
 

  for(var i=0; i< this.listaPersonaJuridica.length; i++){
   
    if(this.listaPersonaJuridica[i].rut == this.rutPersonaJuridica){

      //this.razonSocial = this.listaPersonaJuridica[i].razon;
      
      this.encuentra = '';
     
      let posi = '';
      console.log( this.composicion);
      for(let k = 0; k < this.composicion.length; k++) {
        console.log(this.composicion[k].rutPersonaJuridica);
        if (this.composicion[k].rutPersonaJuridica == this.rutPersonaJuridica) {
          this.encuentra = this.rutPersonaJuridica;
          
          posi = k;
          break;
        }
        
      }
    
    
      if(this.editPor == true){

          this.composicion.splice(posi, 1);
/*console.log(this.juridicoEnArray);
          if(this.juridicoEnArray == true){
            this.composicion.push({
        rutPersonaJuridica: this.listaPersonaJuridica[i].rutPersonaJuridicaNueva,
        dvComp: this.listaPersonaJuridica[i].dvPersonaJuridicaNueva,
        nombre: this.listaPersonaJuridica[i].nombrePersonaJuridicaNueva,
        porcentaje: this.porcentaje});
        this.juridicoEnArray = false;
        }else{*/
          this.composicion.push({
        rutPersonaJuridica: this.listaPersonaJuridica[i].rut,
        dvComp: this.listaPersonaJuridica[i].dv,
        nombre: this.listaPersonaJuridica[i].nombre,
        porcentaje: this.porcentaje});
      //  }
          
        this.guardar();
        this.editPor = false;
        
        

        //editing: this.listaPersonaJuridica[i].editing});
       

      }else{

      if(this.encuentra == ''){
        this.composicion.push({
        rutPersonaJuridica: this.listaPersonaJuridica[i].rut,
        nombre: this.listaPersonaJuridica[i].nombre,
        porcentaje: this.porcentaje,
        dvComp: this.listaPersonaJuridica[i].dv
        //editing: this.listaPersonaJuridica[i].editing

      });
      
       this.guardar();
       this.editPor = false;
       
      }else{


          alert("El Rut " +this.rutPersonaJuridica+" ya exite");
        this.razonSocial = '';
      }  

      

      }
        


      this.formRegistrarPersona = false;
      
      this.disabled = 0;
      //this.rutPersonaJuridica = this.rutComp;
      this.rutPersonaJuridica = '';
      this.razonSocial = '';
      this.porcentaje = '';
     
      return;
    
  }

 
  
  } 
  
  
    this.showModalCrear();
    
        
}
    
  
},


eliminarComposicion: function (indice){

  var opcion = confirm("¿Desea eliminar a esta persona?");
    if (opcion == true) {
        this.composicion.splice(indice, 1);
        this.rutPersonaJuridica = '';
        this.razonSocial = '';
        this.porcentaje = '';
        this.disabled = 0;
	} else {
	   console.log("Chao");
	}
  //this.rutComp = this.composicion[indice].rutComp;
 
      //if(this.respuesta == true){
        
        /*this.composicion.splice(indice, 1);
        this.rutComp = '';
        this.razonSocial = '';
        this.porcentaje = '';
        this.disabled = 0;*/
     /* }else{
        console.log("No eliminar");
        this.showModalEliminar();
        
      }*/
          
     
},

editarPorcentaje: function (indice){
      this.showModalEditar();
/*console.log(this.juridicoEnArray);
      if(this.juridicoEnArray == true){
        this.porcentaje = this.composicion[indice].porcentaje;
        this.rutPersonaJuridica = this.composicion[indice].rutPersonaJuridica;
        this.razonSocial = this.composicion[indice].nombre;
        this.disabled = 1;
        this.editPor = true;
        //this.juridicoEnArray = false;
      }else{*/

        this.porcentaje = this.composicion[indice].porcentaje;
        this.rutPersonaJuridica = this.composicion[indice].rutPersonaJuridica;
        this.razonSocial = this.composicion[indice].nombre;
        this.disabled = 1;
        this.editPor = true;

     // }
       
     
},

//Funciones para los modales de Informacion Comercial

showModalCrear(){
      this.$refs['modal-crear'].show();
},

aceptarCreacion(){
   this.formRegistrarPersona = true;
   this.$refs['modal-crear'].hide();
   this.rutPersonaJuridicaNueva = this.rutPersonaJuridica;
   this.nombrePersonaJuridicaNueva = this.razonSocial;
},

cancelarCreacion(){
    this.formRegistrarPersona = false;
    //this.rutComp = '';
    this.rutPersonaJuridica = '';
    this.razonSocial = '';
    this.porcentaje = '';
    this.disabled = 0;
    this.$refs['modal-crear'].hide();

  },

/*showModalEliminar(){
  this.$refs['modal-eliminar'].show();
},*/

/*aceptarEliminacion(indice){
      this.$refs['modal-eliminar'].hide();
      this.respuesta = true;
      this.eliminarComposicion(indice);
},*/


cancelarEliminacion(){
    this.$refs['modal-eliminar'].hide();
    this.respuesta = false;

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

showModalEditar() {
    this.$refs['modal-editar'].show();
},

aceptarEdicion(){
      this.$refs['modal-editar'].hide();
      this.setFocus();
},

cancelarEdicion(){
    this.$refs['modal-editar'].hide();
    //this.rutComp = '';
    this.rutPersonaJuridica ='';
    this.razonSocial = '';
    this.porcentaje = '';
    this.disabled = 0;
    this.editPor = false;

},

setFocus(){
    this.$refs.porcentaje.focus();
},  




enviarPostulacion: function(){
 
    this.guardar();
    //console.log(this.personaNatural);
    let obj = this.personaNatural;
    let data = JSON.stringify(obj);
    console.log(data);
    Vue.axios.post('http://postulacion.isc.cl/personaNatural',  data).then((response) => {
      alert("Postulacion Enviada");
      //console.log(response.config.data);
      console.log(response.data);
     
    }).catch(function (error) {
      console.log("AXIOS ERROR: ", error);
      });

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

    getListadoVocativo: function(){

      Vue.axios.get('http://postulacion.isc.cl/listarVocativo').then((response) => {
      this.vocativos = response.data;
      //console.log(this.vocativos);
      })

    },

    getlistarEspecialidad: function(){

      Vue.axios.get('http://postulacion.isc.cl/listarEspecialidad').then((response) => {
      this.especialidades = response.data;
        console.log(this.especialidades);
      })

    },

     getlistarProfesiones: function(){

      Vue.axios.get('http://postulacion.isc.cl/listarProfesiones').then((response) => {
      this.profesiones = response.data;
        console.log(this.profesiones);
      })

    },

    getlistarNivel: function(){

      Vue.axios.get('http://postulacion.isc.cl/listarNivel').then((response) => {
      this.nivelEstudios = response.data;
        //console.log(this.nivelEstudios);
      })

    },

    getlistarCargos: function(){

      Vue.axios.get('http://postulacion.isc.cl/listarCargos').then((response) => {
      this.cargoEmpresas = response.data;
        //console.log(this.cargoEmpresas);
      })

    },

    getListarIntereses: function(){

      Vue.axios.get('http://postulacion.isc.cl/listarInteres').then((response) => {
      this.intereses = response.data;
        console.log(this.intereses);
      })

    },

    getListadoEdoCivil: function(){

      Vue.axios.get('http://postulacion.isc.cl/listarEdo').then((response) => {
      this.edoCiviles = response.data;
     // console.log(this.edoCiviles);
      })

    },

    getListadoRegion: function(){
      Vue.axios.get('http://postulacion.isc.cl/listarRegion').then((response) => {
      this.regiones = response.data;
      //console.log(this.regiones);
    })
    
    },

    getListadoRegionPar: function(){
      Vue.axios.get('http://postulacion.isc.cl/listarRegion').then((response) => {
      this.regionesPar = response.data;
      //console.log(this.regionesPar);
    })
    
    },

     getListadoProvincia: function(){
      let idReg = this.regionSeleccionada;
      Vue.axios.get('http://postulacion.isc.cl/listarProvincias/'+idReg).then((response) => {
      this.provincias = response.data;
      
    })
    
    },

    getListadoProvinciaPar: function(){
      let idReg = this.regionSeleccionadaPar;
      Vue.axios.get('http://postulacion.isc.cl/listarProvincias/'+idReg).then((response) => {
      this.provinciasPar = response.data;
      //console.log(this.provinciasPar);
      
    })
    
    },

     getListadoComuna: function(){
       let idProvincia = this.provinciaSeleccionada;

      Vue.axios.get('http://postulacion.isc.cl/listarComuna/'+idProvincia).then((response) => {
      this.comunas = response.data;
      this.getNombreProvincia();
    })
    
    },

    getListadoComunaPar: function(){
       let idComuna = this.provinciaSeleccionadaPar;

      Vue.axios.get('http://postulacion.isc.cl/listarComuna/'+idComuna).then((response) => {
      this.comunasPar = response.data;
      //this.getNombreProvinciaPar();
      //console.log(this.comunas);
    })
    
    },

    /*getNombreRegion: function(){

      let idReg = this.regionSeleccionada;
      Vue.axios.get('http://postulacion.isc.cl/listarRegionnombre/'+idReg).then((response) => {
      this.nombreRegionSelect = response.data[0].region;
      console.log(this.nombreRegionSelect);
      })

    },*/

    getNombreProvincia: function(){

      let idProv = this.provinciaSeleccionada;
      Vue.axios.get('http://postulacion.isc.cl/listarProvincianombre/'+idProv).then((response) => {
      this.nombreProvinciaSelect = response.data[0].provincia;
      console.log(this.nombreProvinciaSelect);
      })

    },

    getNombreComuna: function(){

      let idComuna = this.comunaSeleccionada;
      Vue.axios.get('http://postulacion.isc.cl/listarComunanombre/'+idComuna).then((response) => {
      this.nombreComunaSelect = response.data[0].comuna;
      console.log(this.nombreComunaSelect);
      })

    },

    /*getPersonaJuridica: function(){

      Vue.axios.get('http://postulacion.isc.cl/listarJuridicos').then((response) => {
      this.listaPersonaJuridica= response.data;
      console.log(this.listaPersonaJuridica);
      })

    },*/

    getPersonaJuridica: function(){
     
     /*if(this.composicion.length > 0){
       //for(var i=0; i< this.listaPersonaJuridica.length; i++){
        for(var k = 0; k < this.composicion.length; k++) {
          console.log(this.composicion[k].rutPersonaJuridica);
          console.log(this.rutPersonaJuridica);
          if(this.composicion[k].rutPersonaJuridica == this.rutPersonaJuridica){
              console.log("existe");
              return this.listaPersonaJuridica;
          }else{
             console.log('Buscando...');
            Vue.axios.get('http://postulacion.isc.cl/listarJuridicos').then((response) => {
      this.listaPersonaJuridica= response.data;
      this.listaPersonaJuridicaEmpresa = response.data;
      console.log(this.listaPersonaJuridica);
      });

      this.mostrarListaPersonaJuridicaScroll = 'listaHov';
      this.mostrarListadoPersonaJuridica = true;
      this.mostrarListadoPersonaJuridicaEmpresa = true;
      this.mostrarListaPersonaJuridicaEmpresaScroll = 'listaHov';
          }
        }
      //}
     }else{

       Vue.axios.get('http://postulacion.isc.cl/listarJuridicos').then((response) => {
      this.listaPersonaJuridica= response.data;
      this.listaPersonaJuridicaEmpresa = response.data;
      console.log(this.listaPersonaJuridica);
      });

      this.mostrarListaPersonaJuridicaScroll = 'listaHov';
      this.mostrarListadoPersonaJuridica = true;
      this.mostrarListadoPersonaJuridicaEmpresa = true;
      this.mostrarListaPersonaJuridicaEmpresaScroll = 'listaHov';

     }*/
      
      console.log('Buscando...');
      Vue.axios.get('http://postulacion.isc.cl/listarJuridicos').then((response) => {
      this.listaPersonaJuridica= response.data;
      this.listaPersonaJuridicaEmpresa = response.data;
      console.log(this.listaPersonaJuridica);
      });

      this.mostrarListaPersonaJuridicaScroll = 'listaHov';
      this.mostrarListadoPersonaJuridica = true;
      this.mostrarListadoPersonaJuridicaEmpresa = true;
      this.mostrarListaPersonaJuridicaEmpresaScroll = 'listaHov';
     

    },

     getPersonaJuridicaEmpresa: function(){
      console.log('Buscando...');
      Vue.axios.get('http://postulacion.isc.cl/listarJuridicos').then((response) => {
      this.listaPersonaJuridicaEmpresa = response.data;
      console.log(this.listaPersonaJuridica);
      });

      this.mostrarListadoPersonaJuridicaEmpresa = true;
      this.mostrarListaPersonaJuridicaEmpresaScroll = 'listaHov';
     

    },

    itemClickedPersonaJuridica(item) {
      //this.rutComp = item.rut;
      this.rutPersonaJuridica = item.rut;
      this.razonSocial = item.nombre;
      this.mostrarListaPersonaJuridicaScroll = 'listaHovHidden';
      this.mostrarListadoPersonaJuridica =false;
     
      
  },

  itemClickedPersonaJuridicaEmpresa(item){
    console.log(item);
    this.empresa = item.nombre;
    this.empresaPerId = item.perId;
    this.mostrarListaPersonaJuridicaEmpresaScroll = 'listaHovHidden'
    this.mostrarListadoPersonaJuridicaEmpresa = false;
  },

  cerrarScrollPersonaJuridicaEmpresa(){
    this.mostrarListadoPersonaJuridicaEmpresa = false;
  },

  cerrarScrollPersonaJuridica(){
    this.mostrarListadoPersonaJuridica = false;
  },

  cerrarCreacionPersonaJuridica(){
    this.formRegistrarPersona = false;
  },

  crearPersonaJuridicaNueva(){

this.listaPersonaJuridica.push({
        rut: this.rutPersonaJuridicaNueva,
        nombre: this.nombrePersonaJuridicaNueva,
        porcentaje: this.porcentaje,
        dv: this.dvPersonaJuridicaNueva
        
      });

this.composicion.push({
        rutPersonaJuridica: this.rutPersonaJuridicaNueva,
        nombre: this.nombrePersonaJuridicaNueva,
        porcentaje: this.porcentaje,
        dvComp: this.dvPersonaJuridicaNueva
        
      });

      this.rutPersonaJuridica = '';
      this.razonSocial = '';
      this.porcentaje = '';
      this.juridicoEnArray = true;
      this.formRegistrarPersona = false;
      
      
  },

   validarTelefono(i) {
 
  let telefono = this.telefonosArray[i];
  let expreg = /^(\+?56)?(\s?)(0?9)(\s?)[987654]\d{7}$/;
  
  if(expreg.test(telefono)){
    this.formatoTelefono = false;
  }
	
  else {
    this.formatoTelefono = true;
  }

  /*let telefonoCadenaArray = this.telefonosArray[i].split('');
  //console.log(this.telefonosArray[i]);
  //console.log(telefonoCadenaArray);

  for (var i=0; i < telefonoCadenaArray.length; i++) {
    if(i > 7){
      let arregloString = telefonoCadenaArray.toString();
      //this.codigoArea = telefonoCadenaArray[i] + telefonoCadenaArray[i+1];
      console.log(arregloString);
    }else{
      //console.log("Numero")
    }
      //console.log(telefonoCadenaArray[i]);
   }*/
    
},

primeraMayuscula(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
},

onFileSelectedCV(event) {
      this.filecv = this.$refs.filecv.files[0];
      this.selectedFileCV = event.target.files
      console.log(this.filecv);
    },

removeFileCV: function (e) {
      this.selectedFileCV = '';
    },
    
    onUploadCV() {
      let fd = new FormData();
      fd.append('filecv', this.filecv);
    
      Vue.axios.post( 'http://postulacion.isc.cl/uploadfilecv',
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
    onFileSelectedRespaldo1(event) {
      this.respaldo1 = this.$refs.respaldo1.files[0];
      this.selectedRespaldo1 = event.target.files;
      
      console.log(this.respaldo1);
    },

removeRespaldo1: function (e) {
      this.selectedRespaldo1 = '';
    },
    
    onUploadRespaldo1() {
      let fd = new FormData();
      fd.append('respaldo1', this.respaldo1);
    
      Vue.axios.post( 'http://postulacion.isc.cl/uploadRespaldo1',
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
    onFileSelectedRespaldo2(event) {
      this.respaldo2 = this.$refs.respaldo2.files[0];
      this.selectedRespaldo2 = event.target.files;
      
      console.log(this.respaldo2);
    },

removeRespaldo2: function (e) {
      this.selectedRespaldo2 = '';
    },
    
    onUploadRespaldo2() {
      let fd = new FormData();
      fd.append('respaldo2', this.respaldo2);
    
      Vue.axios.post( 'http://postulacion.isc.cl/uploadRespaldo2',
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

    // Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut: function (rutCompleto) {
      rutCompleto = rutCompleto.replace('‐', '-')

      if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)){
        return false
      }

      var tmp = rutCompleto.split('-')
      var digv = tmp[1]
      var rut = tmp[0]
      
    if ( digv === 'K' ){
      digv = 'k'
    } 

    return (this.dv(rut) == digv );
},

dv : function(T){
    var M=0,S=1;
    for(;T;T=Math.floor(T/10))
        S=(S+T%10*(9-M++%6))%11;
    return S?S-1:'k';
},
updateRutNum: function(){
  console.log(this.$store.state.rutGlobal);
  let estadoRut = this.validaRut(this.rut);
  this.rutNoValido = estadoRut;
},

checkForm: function () {
      if (this.rut) {
        this.camposCorrectos = true;
        return true;
      }

      this.errorRut = [];

      if (!this.rut) {
        this.errorRut.push('El RUT es obligatorio.');
        
      }
      
    }

  },

  created: function(){ 
        this.getListadoVocativo();
        this.getListadoEdoCivil();
        this.getListadoRegion();
        this.getListadoRegionPar();
        //this.getPersonaJuridica();
        this.getListarIntereses();
        this.getlistarCargos();
        this.getlistarNivel();
        this.getlistarProfesiones();
        this.getlistarEspecialidad();
        //this.getListarPatrocinante();        
  },
  
  computed:{
    ...mapState(['rutGlobal','formulario1', 'formulario2', 'formulario3',
                 'formulario4','formulario5','formulario6']),

    isDisabled: function(){
    
    if(this.terms==true && this.terms2==true && this.terms3==true){
      this.msgTerm = false;
      return false;
    }
      this.msgTerm = true;
      return true; 
    },
    buscarPersonaJuridicaEmpresaFiltro: function () {
      return this.listaPersonaJuridicaEmpresa.filter((item) => {
                return item.nombre.toLowerCase().includes(this.empresa.toLowerCase()) || 
                item.rut.toLowerCase().includes(this.empresa.toLowerCase());
            });
    },             
    buscarPersonaJuridicaFiltro: function () {
      return this.listaPersonaJuridica.filter((item) => {
                return item.nombre.toLowerCase().includes(this.rutPersonaJuridica.toLowerCase()) || 
                item.rut.toLowerCase().includes(this.rutPersonaJuridica.toLowerCase());
            });
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
</script>


<style>

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

.rut-invalido{
  border-color: #f14d31;
    padding-right: calc(1.5em + 0.75rem);
    background-image: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23f14d3…%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E);
    background-repeat: no-repeat;
    background-position: center right calc(0.375em + 0.1875rem);
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}


.rut-valido{
    color: #495057;
    background-color: #fff;
    border-color: #76b1e8;
    outline: 0;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(32, 114, 190, 0.25);
    box-shadow: 0 0 0 0.2rem rgba(32, 114, 190, 0.25)
}


/*.form-control:disabled{
    background-color: #e9ecef;
    opacity: 1;
}*/

</style>
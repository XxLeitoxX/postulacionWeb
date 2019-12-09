<template>
  <main class="pn-formulario-1">
    <div class="container" v-if="formulario1">
      <div class="row">
        <!-- LEFT COLUMN -->
        <div class="col-md-6">
          <h3 class="text-uppercase text-primary">Datos Personales</h3>
          <form class="datos-personales">
            <label class="datos-personales__label" for="RUT">RUT*</label>
            <input type="text" id="rut" name="RUT"  class="datos-personales__input" :value="rutGlobal"  v-validate="'required'">
            <label class="datos-personales__label" for="vocativo">Vocativo*</label>
            <select v-model="vocativoSeleccionado" name="vocativo" type="text" id="vocativo" class="datos-personales__input" v-validate="'required'">
              <option value="" disabled>Seleccione uno</option>
              <option v-for="(vocativo, key) in vocativos" :value="vocativo.vocativoId" :key="key">{{ vocativo.vocativo }}</option>
            </select>
            <label class="datos-personales__label" for="nombres">Nombres*</label>
            <input v-model="nombre" name="nombres" v-validate="'required'" type="text" id="nombres" class="datos-personales__input">
            <label class="datos-personales__label" for="apellido-pat">Apellido Paterno*</label>
            <input v-model="apellidoPat" type="text" name="apellidoPat" v-validate="'required'" id="apellido-pat" class="datos-personales__input">
            <label class="datos-personales__label" for="apellido-mat">Apellido Materno*</label>
            <input v-model="apellidoMat" type="text" name="apellidoMat" v-validate="'required'" id="apellido-mat" class="datos-personales__input">
            <label class="datos-personales__label" for="fecha-nac">Fecha nacimiento*</label>
            <!--<input v-model="fechaNacimiento" type="date" name="fechaNacimiento"  v-validate="'required'" id="fecha-nac" class="datos-personales__input datos-personales__input--date">-->
           <datepicker v-model="fechaNacimiento" name="Fecha" :disabled-dates="disabledDates" :language="languages[language]" :format="format" :value="fechaNacimiento" input-class="datos-personales__input datos-personales__input--date">  
          </datepicker>
       
            <label class="datos-personales__label" for="nacionalidad">Nacionalidad</label>
            <input v-model="nacionalidad" type="text" id="nacionalidad" class="datos-personales__input datos-personales__input-nacionalidad">
            <label class="datos-personales__label datos-personales__pasaporte-label invisible"
              for="pasaporte">Pasaporte*</label>
            <input type="text" id="pasaporte"
              class="datos-personales__input  datos-personales__pasaporte-input invisible">
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
            <input v-model="nivelEstudios" type="text" id="nivelDeEstudios" class="datos-personales__input">
            <label class="datos-personales__label" for="centroDeEstudios">Centro de
              estudios*</label>
            <input v-model="centroEstudio" type="text" id="centroDeEstudios" class="datos-personales__input" v-validate="'required'" name="centroEstudio">
            <label class="datos-personales__label" for="profesion">Profesión*</label>
            <input v-model="profesion" type="text" id="profesion" class="datos-personales__input" v-validate="'required'" name="profesion">
            <div class="pt-2 w-100 datos-personales--cv">
              <!--<input type="file"  class="d-none" id="cv"
                accept=".jpg, .jpeg, .png, .pdf, application/pdf, .doc, .docx, .xml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                v-validate="'required'" name="CV">-->
               <b-form-file v-model="cv"  class="d-none" id="cv" v-validate="'required'" name="CV"></b-form-file>
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
            <input v-model="especialidad" type="text" id="especialidad" class="datos-personales__input">
            <label class="datos-personales__label" for="hobbies">Interés/Hobbies</label>
            <input v-model="intereses" type="text" id="hobbies" class="datos-personales__input">
            <label class="datos-personales__label" for="empresa">Empresa</label>
            <input v-model="empresa" type="text" id="empresa" class="datos-personales__input">
            <label class="datos-personales__label" for="cargoEmpresa">Cargo en la empresa</label>
            <input v-model="cargoEmpresa" type="text" id="cargoEmpresa" class="datos-personales__input">
          </form>
        </div> <!-- col-md-6 -->
        <!-- RIGHT COLUMN -->
        <div class="col-md-6 formulario-2__right-column">
          <h3 class="text-uppercase text-primary redes-digitales__title">Información adicional</h3>
          <form class="redes-digitales__form">
            <label for="sitio-web" class="text-small font-weight-bold">Sitio web</label>
            <input v-model="sitioWeb" type="url" id="sitio-web" class="form-control">
          </form>

          <h3 class="text-uppercase text-primary font-weight-bold pt-5">Acompañante</h3>
          <form class="acompanante__form">
            <label for="rut1" class="text-small font-weight-bold">RUT*</label>
            <input v-model="rutAcom" type="number" id="rut1" class="form-control" v-validate="'required'" name="rut2">
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
              for="continuacion1">Continuación</label>
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
            <select v-model="comunaSeleccionada" v-validate="'required'" name="comuna" type="text" id="comuna1" class="direccion1__input direccion1__input--right form-control"
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
                    <input type="tel" id="telefono1" v-validate="'required'" name="telefono" class="form-control"  v-model="telefonosArray[k]" required>
                      <i class="fas fa-minus-circle eliminar-input" @click="removeTel(k)" v-show="k || ( !k && inputsTel.length > 1)" ></i>
                  </div>
                  <div class="col-2 col-sm-1 col-md-2 direccion__tel-mail-right">
                    <button class="btn--direccion1-tel btn--hover-up"  @click="addTel()"><img src="@/assets/images/mas.png"
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
              for="continuacion2">Continuación</label>
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
            <select v-model="comunaSeleccionadaPar" type="text" id="comuna2" v-validate="'required'" name="comuna" class="direccion1__input direccion1__input--right form-control"
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
                    <input v-model="telefonosParArray[z]" v-validate="'required'" name="telefono" type="tel" id="telefono2" class="form-control" required>
                     <i class="fas fa-minus-circle eliminar-input" @click="removeTelefonoPar(z)" v-show="z || ( !z && inputsTelPar.length > 1)"></i>
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
          <form class="accionarios-participacion__form accionarios-participacion__form--pnatural">
            <label for="rut" class="accionarios-participacion__label text-small font-weight-bold">RUT</label>
            <input v-model="rutComp" id="rut" type="text" class="form-control accionarios-participacion__input">
            <label for="name" class="accionarios-participacion__label text-small font-weight-bold">Razón social</label>
            <input v-model="razonSocial" id="name" type="text" class="form-control accionarios-participacion__input">
            <label for="porcentaje"
              class="accionarios-participacion__label text-small font-weight-bold">Porcentaje</label>
            <input v-model="porcentaje" id="porcentaje" type="number" class="form-control accionarios-participacion__input">
            <button class="btn--accionarios-participacion btn--hover-up" @click="buscar"><img src="@/assets/images/mas.png"
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
            <tbody v-for="com in composicion">
                <tr>
                  <td> {{com.nombre}} </td>
                  <td>{{ com.rutComp }}</td>
                  <td>{{ com.porcentaje }}%</td>
                  <td><i class="fas fa-pencil-alt icon-edit"></i> <i class="fas fa-times-circle icon-delete"></i>
                  </td>
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
              <form class="personas-asociadas" v-if="formRegistrarPersona">
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
                </form>
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

          <form class="d-grid patrocinante__form pt-3">
            <label class="patrocinante__label text-small font-weight-bold" for="rut1">RUT*</label>
            <input id="rut1" class="patrocinante__input form-control" required>
            <label class="patrocinante__label text-small font-weight-bold" for="patrocinante1">Patrocinante 1*</label>
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
          </form>

          <form class="d-grid patrocinante__form pt-5">
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
          </form>
        </div> <!-- col-md-6 -->

        <!-- RIGHT COLUMN -->
        <div class="col-sm-3 col-md-3 col-lg-5">
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
                <p class="card__form-label">Dirección: <span class="card__form-data">{{ calle }} {{ numeroCalle }}, {{ nombreProvinciaSelect }},
                  {{ nombreRegionSelect }}
                    </span></p>
              </div>
            </div>

            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="enviar-copia">
              <label class="custom-control-label font-weight-bold text-muted pt-1" for="enviar-copia">Enviar una copia
                de los datos entregados en la solicitud a mi correo electrónico</label>
            </div>
          </div> <!-- col-md-6 -->
        </div> <!-- row -->
        <span v-if="msgTerm" class="font-weight-bold pt-1" style="color:red">*Debe acpetar términos y condiciones</span>
        <div class="d-flex justify-content-center pt-5">
          <button :disabled="isDisabled" class="btn btn--big btn--submit text-white text-uppercase" @click="enviarPostulacion()">Enviar postulación</button>
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

    listaGente:[
      {
      id:'1',
      nombre:'Leo',
      rut:'11111111-1',
      porcentaje: 20
      },
      {
      id:'2',
      nombre:'Gaby',
      rut:'22222222-2',
      porcentaje: 50
    },
    {
      id:'3',
      nombre:'Gene',
      rut:'33333333-3',
      porcentaje: 80
    }
    ],
    
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

       },
       composicion:{

       },
       comites:{

       },
       patrocinantes:{

       },

       compromisos:{

       }
     }],

    
    //Data para el formulario Datos Principales formulario1
     vocativos:[],
     vocativoSeleccionado:'',
     nombre:'',
     apellidoPat:'',
     apellidoMat:'',
     fechaNacimiento:'',
     nacionalidad:'',
     sexo:'',
     edoCivilSeleccionado:'',
     edoCiviles:[],
     nivelEstudios:'',
     centroEstudio:'',
     profesion:'',
     especialidad:'',
     cv:null,
     intereses:'',
     empresa:'',
     cargoEmpresa: '',
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
      nombreRegionSelect:'',
      regionSeleccionada:'',
      comunas:[],
      comunaSeleccionada:'',
      provinciasPar:[],
      provinciaSeleccionadaPar:'',
      regionesPar:[],
      regionSeleccionadaPar:'',
      comunasPar:[],
      comunaSeleccionadaPar:'',
      telefono:'',
      telEx:'',
      email:'',
      correspondencia:'',
      cobranza:'',
      callePar:'',
      numeroCallePar:'',
      oficinaPar:'',
      continuacionPar:'',
      paisPar:'',
      provinciaPar:'',
      regionPar:'',
      comunaPar:'',
      telefonoPar:'',
      emailPar:'',
      correspondenciaPar:'',
      cobranzaPar:'',
      telefonosArray:[],
      emailsArray:[],
      telefonosParArray:[],
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


//Data para el formulario Composicion Accionaria

      rutComp:'',
      razonSocial:'',
      porcentaje:0,
      composicion:[],
      formRegistrarPersona: false,


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
      msgTerm: true
           
    }
  },

  methods:{

    ...mapMutations(['frm1','frm2','frm3', 
                     'frm4','frm5','frm6']),

    siguiente(){
      this.$validator.validate()
				.then(esValido => {
					if (esValido) {

            this.guardar();
            this.frm2();
            console.log("Puede Pasar");

          } else {
						alert("Debe llenar campos requeridos");
					}
        });  
    },                

    siguiente2(){
      this.$validator.validate()
				.then(esValido => {
					if (esValido) {

            this.guardar();
            this.frm3();
            console.log("Puede Pasar");

          } else {
						alert("Debe llenar campos requeridos");
					}
        });  
    },

    siguiente3(){
      this.$validator.validate()
				.then(esValido => {
					if (esValido) {

            this.guardar();
            this.frm4();
            console.log("Puede Pasar");

          } else {
						alert("Debe llenar campos requeridos");
					}
        });  
    },

    siguiente4(){
      this.$validator.validate()
				.then(esValido => {
					if (esValido) {

            this.guardar();
            this.frm5();
            console.log("Puede Pasar");

          } else {
						alert("Debe llenar campos requeridos");
					}
        });  
    },

    siguiente5(){
      this.$validator.validate()
				.then(esValido => {
					if (esValido) {

            this.guardar();
            this.frm6();
            console.log("Puede Pasar");

          } else {
						alert("Debe llenar campos requeridos");
					}
        });  
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
    
    addTelefonoPar() {
            
            this.inputsTelPar.push({ telefonoPar: '' });
            this.inputsTelPar.reverse();
            
        },

    removeTelefonoPar(index) {
            this.inputsTelPar.splice(index, 1);
        },

    addEmailPar() {
            
            this.inputsEmailPar.push({ emailPar: '' });
            this.inputsEmailPar.reverse();
            
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

     /* this.$validator.validate()
				.then(esValido => {
					if (esValido) {*/
     this.personaNatural.push({
        datosPersonales:{
        rutGlobal: this.$store.state.rutGlobal, 
        vocativo: this.vocativoSeleccionado,
        nombre: this.nombre,
        apellidoPat: this.apellidoPat,
        apellidoMat: this.apellidoMat,
        fechaNacimiento: moment(this.fechaNacimiento).format('DD-MM-YYYY'),
        nacionalidad: this.nacionalidad,
        sexo: this.sexo,
        edoCivil: this.edoCivilSeleccionado,
        nivelEstudios: this.nivelEstudios,
        centroEstudio: this.centroEstudio,
        profesion: this.profesion,
        especialidad: this.especialidad,
        cv: this.cv,
        intereses: this.intereses,
        empresa: this.empresa,
        cargoEmpresa:  this.cargoEmpresa,
        sitioWeb: this.sitioWeb,
        rutAcom: this.rutAcom,
        nombreAcom: this.nombreAcom,
        apellidoPatAcom: this.apellidoPatAcom,
        apellidoMatAcom: this.apellidoMatAcom,
        emailAcom: this.emailAcom
        },
        
        direcciones:{
          comercial:{
          calle:this.calle,
          numero:this.numeroCalle,
          oficina: this.oficina,
          continuacion: this.continuacion,
          region: this.regionSeleccionada,
          provincia: this.provinciaSeleccionada,
          comuna: this.comunaSeleccionada,
          telefono: this.telefonosArray,
          email: this.emailsArray,
          correspondencia: this.correspondencia,
          cobranza: this.cobranza
        },
        particular:{
            calle: this.callePar,
            numero: this.numeroCallePar,
            oficina: this.oficinaPar,
            continuacion: this.continuacionPar,
            region: this.regionSeleccionadaPar,
            provincia: this.provinciaSeleccionadaPar,
            comuna: this.comunaSeleccionadaPar,
            telefono: this.telefonosParArray,
            email: this.emailsParArray,
            correspondenciaPar: this.correspondenciaPar,
            cobranzaPar: this.cobranzaPar

          }
          
        },
        composicion:{
          rutComp: this.rutComp,
          porcentaje: this.porcentaje,
          razonSocial: this.razonSocial
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
        }
      });
      
      console.log(this.personaNatural);
				/*	} else {
						alert("Pailax");
					}
        });*/       
    },

  buscar: function (){
    
  if(this.rutComp == ''){
    alert("Debe llenar campo rut");
  }else{
      
  for(var i=0; i< this.listaGente.length; i++){

    if(this.listaGente[i].rut == this.rutComp){

      this.composicion.push({
        rutComp: this.listaGente[i].rut,
        nombre: this.listaGente[i].nombre,
        porcentaje: this.porcentaje
      });

      this.formRegistrarPersona = false;
      this.guardar();
      this.rutComp = '';
      this.razonSocial = '';
      this.porcentaje = '';
      
      return 0;
    }
  }   
  
      this.formRegistrarPersona = true;
     
    
}
    
  
},

    enviarPostulacion: function(){
      alert("Postulacion Enviada");
    },

    getListadoVocativo: function(){

      Vue.axios.get('http://postulacion.isc.cl/listarVocativo').then((response) => {
      this.vocativos = response.data;
      //console.log(this.vocativos);
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
      this.nombreProvinciaSelect = response.data[0].provincia;
      //console.log(this.provincias);
      this.getNombreRegion();
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
       let idComuna = this.provinciaSeleccionada;

      Vue.axios.get('http://postulacion.isc.cl/listarComuna/'+idComuna).then((response) => {
      this.comunas = response.data;
      //console.log(this.comunas);
    })
    
    },

    getListadoComunaPar: function(){
       let idComuna = this.provinciaSeleccionadaPar;

      Vue.axios.get('http://postulacion.isc.cl/listarComuna/'+idComuna).then((response) => {
      this.comunasPar = response.data;
      //console.log(this.comunas);
    })
    
    },

    getNombreRegion: function(){

      let idReg = this.regionSeleccionada;
      Vue.axios.get('http://postulacion.isc.cl/listarRegionnombre/'+idReg).then((response) => {
      this.nombreRegionSelect = response.data[0].region;
      //console.log(this.nombreRegionSelect);
      })

    }

  },

  created: function(){ 
        this.getListadoVocativo();
        this.getListadoEdoCivil();
        this.getListadoRegion();
        this.getListadoRegionPar();
        
           
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
    }             

    /*searchGente: function () {
      return this.listaGente.filter((item) => item.rut.includes(this.rutComp));
    } */           
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

</style>
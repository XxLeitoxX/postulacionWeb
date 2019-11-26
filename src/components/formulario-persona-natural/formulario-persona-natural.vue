<template>
  <main class="pn-formulario-1">
    <div class="container" v-if="pnformulario1">
      <div class="row">
        <!-- LEFT COLUMN -->
        <div class="col-md-6">
          <h3 class="text-uppercase text-primary">Datos Personales</h3>
          <form class="datos-personales">
            <label class="datos-personales__label" for="RUT">RUT*</label>
            <input type="number" id="rut" class="datos-personales__input" :value="rutGlobal" required>
            <label class="datos-personales__label" for="vocativo">Vocativo*</label>
            <select v-model="vocativo" type="text" id="vocativo" class="datos-personales__input" required>
              <option value="algo" disabled>Seleccione uno</option>
              <option value="algo">1</option>
              <option value="algo">2</option>
            </select>
            
            <label class="datos-personales__label" for="nombres">Nombres*</label>
            <input v-model="nombre" type="text" id="nombres" class="datos-personales__input" required>
            <label class="datos-personales__label" for="apellido-pat">Apellido Paterno*</label>
            <input v-model="apellidoPat" type="text" id="apellido-pat" class="datos-personales__input" required>
            <label class="datos-personales__label" for="apellido-mat">Apellido Materno*</label>
            <input v-model="apellidoMat" type="text" id="apellido-mat" class="datos-personales__input" required>
            <label class="datos-personales__label" for="fecha-nac">Fecha nacimiento*</label>
            <input v-model="fechaNacimiento" type="date" id="fecha-nac" class="datos-personales__input datos-personales__input--date" required>
            <label class="datos-personales__label" for="nacionalidad">Nacionalidad</label>
            <input v-model="nacionalidad" type="text" id="nacionalidad" class="datos-personales__input datos-personales__input-nacionalidad">
            <label class="datos-personales__label datos-personales__pasaporte-label invisible"
              for="pasaporte">Pasaporte*</label>
            <input type="text" id="pasaporte"
              class="datos-personales__input datos-personales__pasaporte-input invisible" required>
            <label class="datos-personales__label" for="sexo">Sexo*</label>
            <select v-model="sexo" id="sexo" class="datos-personales__input" required>
              <option value="1">Femenino</option>
              <option value="2">Masculino</option>
            </select>
            <label class="datos-personales__label" for="edoCivil">Estado civil*</label>
            <select v-model="edoCivil" id="edoCivil" class="datos-personales__input" required>
              <option value="1">Soltero/a</option>
              <option value="2">Casado/a</option>
              <option value="3">Viudo/a</option>
              <option value="4">Divorciado/a</option>
              <option value="4">Separado/a</option>
            </select>
            <label class="datos-personales__label" for="nivelDeEstudios">Nivel de
              estudios</label>
            <input v-model="nivelEstudios" type="text" id="nivelDeEstudios" class="datos-personales__input">
            <label class="datos-personales__label" for="centroDeEstudios">Centro de
              estudios*</label>
            <input v-model="centroEstudio" type="text" id="centroDeEstudios" class="datos-personales__input" required>
            <label class="datos-personales__label" for="profesion">Profesión*</label>
            <input v-model="profesion" type="text" id="profesion" class="datos-personales__input" required>
            <div class="pt-2 w-100 datos-personales--cv">
              <input type="file"  class="d-none" id="cv"
                accept=".jpg, .jpeg, .png, .pdf, application/pdf, .doc, .docx, .xml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                required>
              <label for="cv" class="d-flex additional-docs__label">
                <div class="datos-personales__icon-container btn--sibling-hover-right mr-2">
                  <img src="@/assets/images/mas.png" alt="Añadir curriculum empresa" class="img-fluid">
                </div>
                <div class="btn--hover-right d-flex align-items-center">
                  <p class="text-small font-weight-bold">Curriculum vitae*</p>
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
            <input v-model="rutAcom" type="number" id="rut1" class="form-control" required>
            <label for="acompanante-name1" class="text-small font-weight-bold">Nombres*</label>
            <input v-model="nombreAcom" type="text" id="acompanante-name1" class="form-control" required>
            <label for="acompanante-apellido-pat1" class="text-small font-weight-bold">Apellido Paterno*</label>
            <input v-model="apellidoPatAcom" type="text" id="acompanante-apellido-pat1" class="form-control" required>
            <label for="acompanante-apellido-mat1" class="text-small font-weight-bold">Apellido Materno*</label>
            <input v-model="apellidoMatAcom" type="text" id="acompanante-apellido-mat1" class="form-control" required>
            <label for="email1" class="text-small font-weight-bold">Email*</label>
            <input v-model="emailAcom" type="email" id="email1" class="form-control" required>
          </form>

        </div> <!-- col-md-6 -->
      </div> <!-- row -->

       <div class="creacion-solicitud__buttons py-5">
        <button @click="guardar" class="btn btn-danger btn--big m-2">Guardar y cerrar</button>
        <router-link to="/creacion-de-solicitud" class="btn btn-primary btn--big m-2"><i
            class="fas fa-long-arrow-alt-left fa-lg"></i>Anterior</router-link>
             <button @click="frmDireccionComercial" class="btn btn-primary btn--big m-2">Siguiente<i
            class="fas fa-long-arrow-alt-right fa-lg"></i></button>
       
      </div>  <!-- creacion-solicitud__buttons -->

    </div> <!-- container -->


    <div class="pn-formulario-2" v-if="pnformulario2 == true">
    <div class="container">
      <div class="row">

        <!-- LEFT COLUMN -->
        <div class="col-lg-7">
          <h3 class="text-uppercase text-primary">Dirección comercial</h3>
          <form class="direccion1__form">
            <label class="text-small font-weight-bold direccion1__label direccion1__label--left"
              for="calle1">Calle*</label>
            <input v-model="calle" type="text" id="calle1" class="direccion1__input direccion1__input--left-big form-control" required>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--right-small1"
              for="numero1">Número*</label>
            <input type="number" id="numero1" class="direccion1__input direccion1__input--right-small1 form-control"
              required>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--right-small2"
              for="oficina1">Oficina</label>
            <input type="text" id="oficina1" class="direccion1__input direccion1__input--right-small2 form-control">
            <label class="text-small font-weight-bold direccion1__label direccion1__label--left"
              for="continuacion1">Continuación</label>
            <input type="text" id="continuacion1" class="direccion1__input direccion1__input--left form-control">
            <label class="text-small font-weight-bold direccion1__label direccion1__label--left"
              for="pais1">País*</label>
            <input type="text" id="pais1" class="direccion1__input direccion1__input--left form-control"
              placeholder="Chile" value="Chile" disabled>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--right"
              for="provincia1">Provincia*</label>
            <select type="text" id="provincia1" class="direccion1__input direccion1__input--right form-control"
              required></select>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--left"
              for="region1">Región*</label>
            <select type="text" id="region1" class="direccion1__input direccion1__input--left form-control"
              required></select>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--right"
              for="comuna1">Comuna*</label>
            <select type="text" id="comuna1" class="direccion1__input direccion1__input--right form-control"
              required></select>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--left"
              for="telefono1">Teléfono*</label>
            <input type="tel" id="telefono1"
              class="direccion1__input direccion1__input--left direccion1__input--tel form-control" required>
            <button class="btn--direccion1-tel btn--hover-up"><img src="@/assets/images/mas.png" alt="Añadir teléfono"
                height="33px"></button>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--right"
              for="mail1">Email*</label>
            <input type="email" id="mail1"
              class="direccion1__input direccion1__input--right direccion1__input--mail form-control" required>
            <button class="btn--direccion1-tel btn--hover-up"><img src="@/assets/images/mas.png" alt="Añadir teléfono"
                height="33px"></button>
            <div class="custom-control custom-checkbox direccion1-check direccion1-check--left">
              <input type="checkbox" class="custom-control-input" id="dir-correspondencia2">
              <label class="custom-control-label text-small pt-1" for="dir-correspondencia2">Usar dirección para
                correspondencia</label>
            </div>
            <div class="custom-control custom-checkbox direccion1-check direccion1-check--right">
              <input type="checkbox" class="custom-control-input" id="dir-cobranza2">
              <label class="custom-control-label text-small pt-1" for="dir-cobranza2">Usar dirección para
                cobranzas</label>
            </div>
          </form>

          <h3 class="text-uppercase text-primary pt-5">Dirección particular</h3>
          <form class="direccion1__form">
            <label class="text-small font-weight-bold direccion1__label direccion1__label--left"
              for="calle2">Calle*</label>
            <input type="text" id="calle2" class="direccion1__input direccion1__input--left-big form-control" required>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--right-small1"
              for="numero2">Número*</label>
            <input type="number" id="numero2" class="direccion1__input direccion1__input--right-small1 form-control"
              required>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--right-small2"
              for="oficina2">Oficina</label>
            <input type="text" id="oficina2" class="direccion1__input direccion1__input--right-small2 form-control">
            <label class="text-small font-weight-bold direccion1__label direccion1__label--left"
              for="continuacion2">Continuación</label>
            <input type="text" id="continuacion2" class="direccion1__input direccion1__input--left form-control">
            <label class="text-small font-weight-bold direccion1__label direccion1__label--left"
              for="pais2">País*</label>
            <input type="text" id="pais2" class="direccion1__input direccion1__input--left form-control"
              placeholder="Chile" value="Chile" disabled>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--right"
              for="provincia2">Provincia*</label>
            <select type="text" id="provincia2" class="direccion1__input direccion1__input--right form-control"
              required></select>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--left"
              for="region2">Región*</label>
            <select type="text" id="region2" class="direccion1__input direccion1__input--left form-control"
              required></select>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--right"
              for="comuna2">Comuna*</label>
            <select type="text" id="comuna2" class="direccion1__input direccion1__input--right form-control"
              required></select>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--left"
              for="telefono2">Teléfono*</label>
            <input type="tel" id="telefono2"
              class="direccion1__input direccion1__input--left direccion1__input--tel form-control" required>
            <button class="btn--direccion1-tel btn--hover-up"><img src="@/assets/images/mas.png" alt="Añadir teléfono"
                height="33px"></button>
            <label class="text-small font-weight-bold direccion1__label direccion1__label--right"
              for="mail2">Email*</label>
            <input type="email" id="mail2"
              class="direccion1__input direccion1__input--right direccion1__input--mail form-control" required>
            <button class="btn--direccion1-tel btn--hover-up"><img src="@/assets/images/mas.png" alt="Añadir teléfono"
                height="33px"></button>
            <div class="custom-control custom-checkbox direccion1-check direccion1-check--left">
              <input type="checkbox" class="custom-control-input" id="dir-correspondencia2">
              <label class="custom-control-label text-small pt-1" for="dir-correspondencia2">Usar dirección para
                correspondencia</label>
            </div>
            <div class="custom-control custom-checkbox direccion1-check direccion1-check--right">
              <input type="checkbox" class="custom-control-input" id="dir-cobranza2">
              <label class="custom-control-label text-small pt-1" for="dir-cobranza2">Usar dirección para
                cobranzas</label>
            </div>
          </form>
        </div> <!-- col-md-6 -->

        <!-- RIGHT COLUMN -->
        <div class="col-lg-5">
        </div> <!-- col-md-6 -->

      </div> <!-- row -->

      <div class="creacion-solicitud__buttons py-5">
        <button @click="guardar" class="btn btn-danger btn--big m-2">Guardar y cerrar</button>
        <button @click="frmDatosPersonales()" class="btn btn-primary btn--big m-2"><i
            class="fas fa-long-arrow-alt-left fa-lg"></i>Anterior</button>
        
        <button @click="frmComposicionAccionaria" class="btn btn-primary btn--big m-2">Siguiente<i
            class="fas fa-long-arrow-alt-right fa-lg"></i></button>
      </div>  <!--creacion-solicitud__buttons -->

    </div> <!-- container -->
  </div> <!-- formulario-2 -->


    <div class="pn-formulario-3" v-show="pnformulario3 == true">
    <div class="container">
      <div class="row">

        <!-- LEFT COLUMN -->
        <div class="col-md-7 col-lg-6">
          <h3 class="text-primary text-uppercase font-weight-bold">Composición accionaria</h3>
          <form class="accionarios-participacion__form accionarios-participacion__form--pnatural">
            <label for="rut" class="accionarios-participacion__label text-small font-weight-bold">RUT</label>
            <input id="rut" type="number" class="form-control accionarios-participacion__input">
            <label for="name" class="accionarios-participacion__label text-small font-weight-bold">Razón social</label>
            <input id="name" type="text" class="form-control accionarios-participacion__input">
            <label for="porcentaje"
              class="accionarios-participacion__label text-small font-weight-bold">Porcentaje</label>
            <input id="porcentaje" type="number" class="form-control accionarios-participacion__input">
            <button class="btn--accionarios-participacion btn--hover-up"><img src="@/assets/images/mas.png"
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
              <tbody>
                <tr>
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
                </tr>
              </tbody>
            </table>
          </div>
        </div> <!-- col-md-6 -->

        <!-- RIGHT COLUMN -->
        <div class="col-md-5 col-lg-6">
        </div> <!-- col-md-6 -->
      </div> <!-- row -->

      <div class="creacion-solicitud__buttons py-5 mt-5">
        <a href="" class="btn btn-danger btn--big m-2">Guardar y cerrar</a>
        <button @click="frmDireccionComercial" class="btn btn-primary btn--big m-2"><i
            class="fas fa-long-arrow-alt-left fa-lg"></i>Anterior</button>
        
        <button @click="frmSeleccionComite" class="btn btn-primary btn--big m-2">Siguiente<i
            class="fas fa-long-arrow-alt-right fa-lg"></i></button>
      </div>  <!-- creacion-solicitud__buttons -->
    </div>
</div>    


 <div class="pn-formulario-4" v-show="pnformulario4 == true">
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
          </div>
        </div> <!-- col-md-6 -->

        <!-- RIGHT COLUMN -->
        <div class="col-md-6">
        </div> <!-- col-md-6 -->
      </div> <!-- row -->

        <div class="creacion-solicitud__buttons py-5 mt-5">
        <a href="" class="btn btn-danger btn--big m-2">Guardar y cerrar</a>
        <button @click="frmComposicionAccionaria" class="btn btn-primary btn--big m-2"><i
            class="fas fa-long-arrow-alt-left fa-lg"></i>Anterior</button>
        
        <button @click="frmPatrocinantes" class="btn btn-primary btn--big m-2">Siguiente<i
            class="fas fa-long-arrow-alt-right fa-lg"></i></button>
      </div>  <!-- creacion-solicitud__buttons -->

    </div> <!-- container -->
  </div> 


 <div class="pn-formulario-5" v-show="pnformulario5 == true">
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
        <a href="" class="btn btn-danger btn--big m-2">Guardar y cerrar</a>
        <button @click="frmSeleccionComite" class="btn btn-primary btn--big m-2"><i
            class="fas fa-long-arrow-alt-left fa-lg"></i>Anterior</button>
        
        <button @click="frmConfirmacion" class="btn btn-primary btn--big m-2">Siguiente<i
            class="fas fa-long-arrow-alt-right fa-lg"></i></button>
      </div>  <!-- creacion-solicitud__buttons -->

    </div> <!-- container -->
  </div>


  <div class="pn-formulario-6" v-show="pnformulario6 == true">
       
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
          <div class="col-md-6">
            <h3 class="text-primary text-uppercase compromisos__confirmacion-title">Confirmación</h3>
            <p class="text-muted text-small font-weight-bold">Antes de enviar su postulación revise toda la información
              adjunta en los formularios.</p>

            <div class="card mt-3">
              <div class="card-header text-white text-uppercase bg-primary py-3 px-5">Datos del solicitante</div>
              <div class="card-body pt-4 pb-5 px-5 card__form">
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

      <div class="creacion-solicitud__buttons py-5 mt-5">
        <a href="" class="btn btn-danger btn--big m-2">Guardar y cerrar</a>
        <button @click="frmPatrocinantes" class="btn btn-primary btn--big m-2"><i
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

export default{
  name: 'formularioPersonaNatural',
  components: {
        
    },
  data () {
    return {

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

     vocativo:'',
     nombre:'',
     apellidoPat:'',
     apellidoMat:'',
     fechaNacimiento:'',
     nacionalidad:'',
     sexo:'',
     edoCivil:'',
     nivelEstudios:'',
     centroEstudio:'',
     profesion:'',
     especialidad:'',
     cv:'',
     intereses:'',
     empresa:'',
     cargoEmpresa: '',
     sitioWeb:'',
     rutAcom:'',
     nombreAcom:'',
     apellidoPatAcom:'',
     apellidoMatAcom:'',
     emailAcom:'',
     calle:''


    }
  },

  methods:{

    ...mapMutations(['frmDireccionComercial','frmDatosPersonales','frmComposicionAccionaria', 
                     'frmSeleccionComite','frmPatrocinantes','frmConfirmacion']),

    
    guardar: function(){

      this.personaNatural.push({
        datosPersonales:{
        vocativo: this.vocativo,
        nombre: this.nombre,
        apellidoPat: this.apellidoPat,
        apellidoMat: this.apellidoMat,
        fechaNacimiento: this.fechaNacimiento,
        nacionalidad: this.nacionalidad,
        sexo: this.sexo,
        edoCivil: this.edoCivil,
        nivelEstudios: this.nivelEstudios,
        centroEstudio: this.centroEstudio,
        profesion: this.profesion,
        especialidad: this.especialidad,
        cv:'',
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
          calle:this.calle
          
        }
      });

      console.log(this.personaNatural);
    }
  },

  computed:{
    ...mapState(['rutGlobal','pnformulario1', 'pnformulario2', 'pnformulario3',
                 'pnformulario4','pnformulario5','pnformulario6'])
  }
}
</script>
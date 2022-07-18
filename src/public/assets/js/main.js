/* regions.addEventListener('change', (e) => {
	comunes.options.length = 0;
	regiones.forEach((region) => {
		if (region.NombreRegion == e.target.value) {
			region.comunas.forEach((comuna) => {
				var option = document.createElement('option'); //Creamos la opcion
				option.innerHTML = comuna; //Metemos el texto en la opcion
				option.value = comuna;
				comunes.appendChild(option); //Metemos la opcion en el select
			});
		}
	});
	let parent_fieldset = $('.multisteps-form__panel.js-active');
	parent_fieldset.find('.selects').each(function (idx, data) {
		$(this).removeClass('custom-select is-invalid');
		$(this).addClass('custom-select is-valid');
	});
});

window.addEventListener('load', function (event) {
	regiones.forEach((region) => {
		var option = document.createElement('option'); //Creamos la opcion
		option.innerHTML = region.NombreRegion; //Metemos el texto en la opcion
		option.value = region.NombreRegion;
		regions.appendChild(option); //Metemos la opcion en el select
	});
}); */

var regiones = [
	{
		NombreRegion: 'Arica y Parinacota',
		comunas: ['Arica', 'Camarones', 'Putre', 'General Lagos'],
	},
	{
		NombreRegion: 'Tarapaca',
		comunas: ['Iquique', 'Alto Hospicio', 'Pozo Almonte', 'Camiña', 'Colchane', 'Huara', 'Pica'],
	},
	{
		NombreRegion: 'Antofagasta',
		comunas: [
			'Antofagasta',
			'Mejillones',
			'Sierra Gorda',
			'Taltal',
			'Calama',
			'Ollagüe',
			'San Pedro de Atacama',
			'Tocopilla',
			'Maria Elena',
		],
	},
	{
		NombreRegion: 'Atacama',
		comunas: [
			'Copiapo',
			'Caldera',
			'Tierra Amarilla',
			'Chañaral',
			'Diego de Almagro',
			'Vallenar',
			'Alto del Carmen',
			'Freirina',
			'Huasco',
		],
	},
	{
		NombreRegion: 'Coquimbo',
		comunas: [
			'La Serena',
			'Coquimbo',
			'Andacollo',
			'La Higuera',
			'Paiguano',
			'Vicuña',
			'Illapel',
			'Canela',
			'Los Vilos',
			'Salamanca',
			'Ovalle',
			'Combarbala',
			'Monte Patria',
			'Punitaqui',
			'Rio Hurtado',
		],
	},
	{
		NombreRegion: 'Valparaiso',
		comunas: [
			'Valparaiso',
			'Casablanca',
			'Concon',
			'Juan Fernandez',
			'Puchuncavi',
			'Quintero',
			'Viña del Mar',
			'Isla de Pascua',
			'Los Andes',
			'Calle Larga',
			'Rinconada',
			'San Esteban',
			'La Ligua',
			'Cabildo',
			'Papudo',
			'Petorca',
			'Zapallar',
			'Quillota',
			'Calera',
			'Hijuelas',
			'La Cruz',
			'Nogales',
			'San Antonio',
			'Algarrobo',
			'Cartagena',
			'El Quisco',
			'El Tabo',
			'Santo Domingo',
			'San Felipe',
			'Catemu',
			'Llaillay',
			'Panquehue',
			'Putaendo',
			'Santa Maria',
			'Quilpue',
			'Limache',
			'Olmue',
			'Villa Alemana',
		],
	},
	{
		NombreRegion: 'O’Higgins',
		comunas: [
			'Rancagua',
			'Codegua',
			'Coinco',
			'Coltauco',
			'Doñihue',
			'Graneros',
			'Las Cabras',
			'Machali',
			'Malloa',
			'Mostazal',
			'Olivar',
			'Peumo',
			'Pichidegua',
			'Quinta de Tilcoco',
			'Rengo',
			'Requinoa',
			'San Vicente',
			'Pichilemu',
			'La Estrella',
			'Litueche',
			'Marchihue',
			'Navidad',
			'Paredones',
			'San Fernando',
			'Chepica',
			'Chimbarongo',
			'Lolol',
			'Nancagua',
			'Palmilla',
			'Peralillo',
			'Placilla',
			'Pumanque',
			'Santa Cruz',
		],
	},
	{
		NombreRegion: 'Maule',
		comunas: [
			'Talca',
			'Constitucion',
			'Curepto',
			'Empedrado',
			'Maule',
			'Pelarco',
			'Pencahue',
			'Rio Claro',
			'San Clemente',
			'San Rafael',
			'Cauquenes',
			'Chanco',
			'Pelluhue',
			'Curico',
			'Hualañe',
			'Licanten',
			'Molina',
			'Rauco',
			'Romeral',
			'Sagrada Familia',
			'Teno',
			'Vichuquen',
			'Linares',
			'Colbun',
			'Longavi',
			'Parral',
			'Retiro',
			'San Javier',
			'Villa Alegre',
			'Yerbas Buenas',
		],
	},
	{
		NombreRegion: 'Ñuble',
		comunas: [
			'Bulnes',
			'Chillan',
			'Chillan Viejo',
			'Cobquecura',
			'Coelemu',
			'Coihueco',
			'El Carmen',
			'Ninhue',
			'Ñiquen',
			'Pemuco',
			'Pinto',
			'Portezuelo',
			'Quillon',
			'Quirihue',
			'Ranquil',
			'San Carlos',
			'San Fabian',
			'San Ignacio',
			'San Nicolas',
			'Treguaco',
			'Yungay',
		],
	},
	{
		NombreRegion: 'Biobio',
		comunas: [
			'Concepcion',
			'Coronel',
			'Chiguayante',
			'Florida',
			'Hualqui',
			'Lota',
			'Penco',
			'San Pedro de la Paz',
			'Santa Juana',
			'Talcahuano',
			'Tome',
			'Hualpen',
			'Lebu',
			'Arauco',
			'Cañete',
			'Contulmo',
			'Curanilahue',
			'Los Alamos',
			'Tirua',
			'Los Angeles',
			'Antuco',
			'Cabrero',
			'Laja',
			'Mulchen',
			'Nacimiento',
			'Negrete',
			'Quilaco',
			'Quilleco',
			'San Rosendo',
			'Santa Barbara',
			'Tucapel',
			'Yumbel',
			'Alto Biobio',
		],
	},
	{
		NombreRegion: 'Araucania',
		comunas: [
			'Temuco',
			'Carahue',
			'Cunco',
			'Curarrehue',
			'Freire',
			'Galvarino',
			'Gorbea',
			'Lautaro',
			'Loncoche',
			'Melipeuco',
			'Nueva Imperial',
			'Padre Las Casas',
			'Perquenco',
			'Pitrufquen',
			'Pucon',
			'Saavedra',
			'Teodoro Schmidt',
			'Tolten',
			'Vilcun',
			'Villarrica',
			'Cholchol',
			'Angol',
			'Collipulli',
			'Curacautin',
			'Ercilla',
			'Lonquimay',
			'Los Sauces',
			'Lumaco',
			'Puren',
			'Renaico',
			'Traiguen',
			'Victoria',
		],
	},
	{
		NombreRegion: 'Los Rios',
		comunas: [
			'Valdivia',
			'Corral',
			'Lanco',
			'Los Lagos',
			'Mafil',
			'Mariquina',
			'Paillaco',
			'Panguipulli',
			'La Union',
			'Futrono',
			'Lago Ranco',
			'Rio Bueno',
		],
	},
	{
		NombreRegion: 'Los Lagos',
		comunas: [
			'Puerto Montt',
			'Calbuco',
			'Cochamo',
			'Fresia',
			'Frutillar',
			'Los Muermos',
			'Llanquihue',
			'Maullin',
			'Puerto Varas',
			'Castro',
			'Ancud',
			'Chonchi',
			'Curaco de Velez',
			'Dalcahue',
			'Puqueldon',
			'Queilen',
			'Quellon',
			'Quemchi',
			'Quinchao',
			'Osorno',
			'Puerto Octay',
			'Purranque',
			'Puyehue',
			'Rio Negro',
			'San Juan de la Costa',
			'San Pablo',
			'Chaiten',
			'Futaleufu',
			'Hualaihue',
			'Palena',
		],
	},
	{
		NombreRegion: 'Aysén',
		comunas: [
			'Coyhaique',
			'Lago Verde',
			'Aysen',
			'Cisnes',
			'Guaitecas',
			'Cochrane',
			'O’Higgins',
			'Tortel',
			'Chile Chico',
			'Rio Ibañez',
		],
	},
	{
		NombreRegion: 'Magallanes',
		comunas: [
			'Punta Arenas',
			'Laguna Blanca',
			'Rio Verde',
			'San Gregorio',
			'Cabo de Hornos',
			'Antartica',
			'Porvenir',
			'Primavera',
			'Timaukel',
			'Natales',
			'Torres del Paine',
		],
	},
	{
		NombreRegion: 'Metropolitana',
		comunas: [
			'Cerrillos',
			'Cerro Navia',
			'Conchali',
			'El Bosque',
			'Estacion Central',
			'Huechuraba',
			'Independencia',
			'La Cisterna',
			'La Florida',
			'La Granja',
			'La Pintana',
			'La Reina',
			'Las Condes',
			'Lo Barnechea',
			'Lo Espejo',
			'Lo Prado',
			'Macul',
			'Maipu',
			'Ñuñoa',
			'Pedro Aguirre Cerda',
			'Peñalolen',
			'Providencia',
			'Pudahuel',
			'Quilicura',
			'Quinta Normal',
			'Recoleta',
			'Renca',
			'San Joaquin',
			'San Miguel',
			'Santiago',
			'San Ramon',
			'Vitacura',
			'Puente Alto',
			'Pirque',
			'San Jose de Maipo',
			'Colina',
			'Lampa',
			'Tiltil',
			'San Bernardo',
			'Buin',
			'Calera de Tango',
			'Paine',
			'Melipilla',
			'Alhue',
			'Curacavi',
			'Maria Pinto',
			'San Pedro',
			'Talagante',
			'El Monte',
			'Isla de Maipo',
			'Padre Hurtado',
			'Peñaflor',
		],
	},
];

window.addEventListener('load', function (event) {
	let form = $('#wizard');

	let parent_fieldset = $('.multisteps-form__panel.js-active');

	parent_fieldset.find('.required').each(function (idx, data) {
		data.addEventListener('keyup', (e) => {
			if (e.target.value.length > 1) {
				$(this).removeClass('custom-select is-invalid');
				$(this).addClass('custom-select is-valid');
			} else {
				$(this).removeClass('custom-select is-valid');
				$(this).addClass('custom-select is-invalid');
			}
		});
		var form = $('.required');
		form.validate();
	});
});

$(function () {
	// Select Dropdown
	$('html').on('click', function () {
		$('.select .dropdown').hide();
	});
	$('.select').on('click', function (event) {
		event.stopPropagation();
	});
	$('.select .select-control').on('click', function () {
		$(this).parent().next().toggle();
	});
	$('.select .dropdown li').on('click', function () {
		$(this).parent().toggle();
		var text = $(this).attr('rel');
		$(this).parent().prev().find('div').text(text);
	});

	// date picker
	$('.datepicker').datepicker({
		clearBtn: true,
		format: 'dd/mm/yyyy',
	});

	$('.opti-list ul li').on('click', function (e) {
		$(this).find('input[type=checkbox]').prop('checked', !$(this).find('input[type=checkbox]').prop('checked'));

		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');
		}
	});

	$('input[type=checkbox]').click(function (e) {
		e.stopPropagation();
		return true;
	});

	$('.plan-icon-text').on('click', function () {
		$(this).find('input[type=radio]').prop('checked', true);
		$('.plan-icon-text').removeClass('active');
		$(this).addClass('active');
	});

	//multi form ===================================
	//DOM elements

	const DOMstrings = {
		stepsBtnClass: 'multisteps-form__progress-btn',
		stepsBtns: document.querySelectorAll(`.multisteps-form__progress-btn`),
		stepsBar: document.querySelector('.multisteps-form__progress'),
		stepsForm: document.querySelector('.multisteps-form__form'),
		stepFormPanelClass: 'multisteps-form__panel',
		stepFormPanels: document.querySelectorAll('.multisteps-form__panel'),
		stepPrevBtnClass: 'js-btn-prev',
		stepNextBtnClass: 'js-btn-next',
	};

	//remove class from a set of items
	const removeClasses = (elemSet, className) => {
		elemSet.forEach((elem) => {
			elem.classList.remove(className);
		});
	};

	//return exect parent node of the element
	const findParent = (elem, parentClass) => {
		let currentNode = elem;

		while (!currentNode.classList.contains(parentClass)) {
			currentNode = currentNode.parentNode;
		}

		return currentNode;
	};

	//get active button step number
	const getActiveStep = (elem) => {
		return Array.from(DOMstrings.stepsBtns).indexOf(elem);
	};

	//set all steps before clicked (and clicked too) to active
	const setActiveStep = (activeStepNum) => {
		//remove active state from all the state
		removeClasses(DOMstrings.stepsBtns, 'js-active');
		removeClasses(DOMstrings.stepsBtns, 'current');

		//set picked items to active
		DOMstrings.stepsBtns.forEach((elem, index) => {
			if (index <= activeStepNum) {
				elem.classList.add('js-active');
				$(elem).addClass(index);
			}

			if (index == activeStepNum) {
				elem.classList.add('current');
			}
		});
	};

	//get active panel
	const getActivePanel = () => {
		let activePanel;

		DOMstrings.stepFormPanels.forEach((elem) => {
			if (elem.classList.contains('js-active')) {
				activePanel = elem;
			}
		});

		return activePanel;
	};

	//open active panel (and close unactive panels)
	const setActivePanel = (activePanelNum) => {
		const animation = $(DOMstrings.stepFormPanels, 'js-active').attr('data-animation');

		//remove active class from all the panels
		removeClasses(DOMstrings.stepFormPanels, 'js-active');
		removeClasses(DOMstrings.stepFormPanels, animation);
		removeClasses(DOMstrings.stepFormPanels, 'animate__animated');

		//show active panel
		DOMstrings.stepFormPanels.forEach((elem, index) => {
			if (index === activePanelNum) {
				elem.classList.add('js-active');
				// stepFormPanels
				elem.classList.add('animate__animated', animation);

				setTimeout(function () {
					removeClasses(DOMstrings.stepFormPanels, 'animate__animated', animation);
				}, 1200);

				setFormHeight(elem);
			}
		});
	};

	//set form height equal to current panel height
	const formHeight = (activePanel) => {
		const activePanelHeight = activePanel.offsetHeight;

		DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;
	};

	const setFormHeight = () => {
		const activePanel = getActivePanel();

		formHeight(activePanel);
	};

	//STEPS BAR CLICK FUNCTION
	DOMstrings.stepsBar.addEventListener('click', (e) => {
		//check if click target is a step button
		const eventTarget = e.target;

		if (!eventTarget.classList.contains(`${DOMstrings.stepsBtnClass}`)) {
			return;
		}

		//get active button step number
		const activeStep = getActiveStep(eventTarget);

		//set all steps before clicked (and clicked too) to active
		// setActiveStep(activeStep);

		//open active panel
		// setActivePanel(activeStep);
	});

	$('.thumbs').on('click', function () {
		let parent_fieldset = $('.multisteps-form__panel.js-active');
		let inputs = parent_fieldset.find('.thumbs');

		inputs.each((idx, input) => {
			$(input).removeClass('active');
		});

		$(this).addClass('active');
	});

	$('.asdd').on('click', function () {
		let parent_fieldset = $('.multisteps-form__panel.js-active');
		let inputs = parent_fieldset.find('.bg-white');

		inputs.each((idx, input) => {
			$(input).removeClass('active');
			$(input).find('input[type=radio]').removeAttr('checked');
		});

		$(this).addClass('active');
		$(this).find('input[type=radio]').attr('checked', 'checked');
	});

	//PREV/NEXT BTNS CLICK
	DOMstrings.stepsForm.addEventListener('click', (e) => {
		const eventTarget = e.target;

		//check if we clicked on `PREV` or NEXT` buttons
		if (
			!(
				eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`) ||
				eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`)
			)
		) {
			return;
		}

		//find active panel
		const activePanel = findParent(eventTarget, `${DOMstrings.stepFormPanelClass}`);

		let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(activePanel);

		//set active step and active panel onclick
		if (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) {
			activePanelNum--;

			setActiveStep(activePanelNum);
			setActivePanel(activePanelNum);
		} else if (eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`)) {
			let form = $('#wizard');
			form.validate();

			let parent_fieldset = $('.multisteps-form__panel.js-active');
			let next_step = true;
			let inputs = parent_fieldset.find('.asd');
			let array = [];

			parent_fieldset.find('.required').each(function () {
				next_step = false;
				var form = $('.required');
				form.validate();
				$(this).addClass('custom-select is-invalid');
			});

			if (form.validate().currentForm[0].classList[4] === 'valid') {
				next_step = true;
			}

			inputs.each((idx, input) => {
				array.push(input.checked);
			});

			let found = array.find((e) => e === true);

			if (activePanelNum === 1) {
				let nexts = true;
				let parent_fieldset = $('.multisteps-form__panel.js-active');

				parent_fieldset.find('.selects').each(function (idx, data) {
					if (data.value === 'Seleccione su region' || data.value === 'Seleccione su comuna') {
						nexts = false;
						var form = $('.required');
						form.validate();
						$(this).addClass('custom-select is-invalid');
					} else {
						nexts = true;
					}
				});

				if (nexts === true) {
					parent_fieldset.find('.selects').each(function () {
						$(this).removeClass('custom-select is-invalid');
					});

					$('html, body').animate(
						{
							scrollTop: 0,
						},
						600
					);
					activePanelNum++;
					setActiveStep(activePanelNum);
					setActivePanel(activePanelNum);
				}
			}

			if (found === true) {
				parent_fieldset.find('.alert-danger').each(function () {
					$(this).removeClass('d-block');
					$(this).addClass('d-none');
				});

				$('html, body').animate(
					{
						scrollTop: 0,
					},
					600
				);
				activePanelNum++;
				setActiveStep(activePanelNum);
				setActivePanel(activePanelNum);
			} else {
				if (activePanelNum === 0 && next_step === true) {
					parent_fieldset.find('.alert-danger').each(function () {
						$(this).removeClass('d-block');
						$(this).addClass('d-none');
					});

					$('html, body').animate(
						{
							scrollTop: 0,
						},
						600
					);
					activePanelNum++;
					setActiveStep(activePanelNum);
					setActivePanel(activePanelNum);
					next_step = false;
				}

				parent_fieldset.find('.alert-danger').each(function () {
					$(this).removeClass('d-none');
					$(this).addClass('d-block');
				});
			}
		}
	});

	//SETTING PROPER FORM HEIGHT ONLOAD
	window.addEventListener('load', setFormHeight, true);

	//SETTING PROPER FORM HEIGHT ONRESIZE
	window.addEventListener('resize', setFormHeight, true);
});

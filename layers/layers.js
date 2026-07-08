var wms_layers = [];


        var lyr_ESRITopo_0 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Indicadores_barrios_AMC_1 = new ol.format.GeoJSON();
var features_Indicadores_barrios_AMC_1 = format_Indicadores_barrios_AMC_1.readFeatures(json_Indicadores_barrios_AMC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indicadores_barrios_AMC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indicadores_barrios_AMC_1.addFeatures(features_Indicadores_barrios_AMC_1);
var lyr_Indicadores_barrios_AMC_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indicadores_barrios_AMC_1, 
                style: style_Indicadores_barrios_AMC_1,
                popuplayertitle: 'Indicadores_barrios_AMC',
                interactive: true,
                title: '<img src="styles/legend/Indicadores_barrios_AMC_1.png" /> Indicadores_barrios_AMC'
            });
var format_atractivosturisticos_2 = new ol.format.GeoJSON();
var features_atractivosturisticos_2 = format_atractivosturisticos_2.readFeatures(json_atractivosturisticos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_atractivosturisticos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_atractivosturisticos_2.addFeatures(features_atractivosturisticos_2);
var lyr_atractivosturisticos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_atractivosturisticos_2, 
                style: style_atractivosturisticos_2,
                popuplayertitle: 'atractivos turisticos',
                interactive: true,
    title: 'atractivos turisticos<br />\
    <img src="styles/legend/atractivosturisticos_2_0.png" /> Antigua Fabrica de Paños Bellavista<br />\
    <img src="styles/legend/atractivosturisticos_2_1.png" /> Mina Chiflón del Diablo<br />\
    <img src="styles/legend/atractivosturisticos_2_2.png" /> Mirador Aleman<br />\
    <img src="styles/legend/atractivosturisticos_2_3.png" /> Mirador Lirquen<br />\
    <img src="styles/legend/atractivosturisticos_2_4.png" /> Monitor Huascar<br />\
    <img src="styles/legend/atractivosturisticos_2_5.png" /> Museo de Historia Natural de Concepción<br />\
    <img src="styles/legend/atractivosturisticos_2_6.png" /> Parque mirador Los Pinos<br />\
    <img src="styles/legend/atractivosturisticos_2_7.png" /> Tarro de Jurel SanJosé<br />\
    <img src="styles/legend/atractivosturisticos_2_8.png" /> Teatro Bio Bio<br />\
    <img src="styles/legend/atractivosturisticos_2_9.png" /> Casa de la Cultura de Chiguayante<br />\
    <img src="styles/legend/atractivosturisticos_2_10.png" /> Cerro Amarillo<br />\
    <img src="styles/legend/atractivosturisticos_2_11.png" /> plaza de juegos<br />\
    <img src="styles/legend/atractivosturisticos_2_12.png" /> Plaza La Conquistada<br />' });
var format_atractivos_turisticos_poligono_3 = new ol.format.GeoJSON();
var features_atractivos_turisticos_poligono_3 = format_atractivos_turisticos_poligono_3.readFeatures(json_atractivos_turisticos_poligono_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_atractivos_turisticos_poligono_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_atractivos_turisticos_poligono_3.addFeatures(features_atractivos_turisticos_poligono_3);
var lyr_atractivos_turisticos_poligono_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_atractivos_turisticos_poligono_3, 
                style: style_atractivos_turisticos_poligono_3,
                popuplayertitle: 'atractivos_turisticos_poligono',
                interactive: true,
    title: 'atractivos_turisticos_poligono<br />\
    <img src="styles/legend/atractivos_turisticos_poligono_3_0.png" /> <br />\
    <img src="styles/legend/atractivos_turisticos_poligono_3_1.png" /> Caleta Chome<br />\
    <img src="styles/legend/atractivos_turisticos_poligono_3_2.png" /> Caleta Lenga/humedal Lenga<br />\
    <img src="styles/legend/atractivos_turisticos_poligono_3_3.png" /> Caleta Tumbes<br />\
    <img src="styles/legend/atractivos_turisticos_poligono_3_4.png" /> Desembocadura Rio Bio Bio<br />\
    <img src="styles/legend/atractivos_turisticos_poligono_3_5.png" /> EstadioEster Roa Rebolledo<br />\
    <img src="styles/legend/atractivos_turisticos_poligono_3_6.png" /> Humedal Vasco de Gama<br />\
    <img src="styles/legend/atractivos_turisticos_poligono_3_7.png" /> Laguna Lo Galindo<br />\
    <img src="styles/legend/atractivos_turisticos_poligono_3_8.png" /> Laguna Lo Mendez<br />\
    <img src="styles/legend/atractivos_turisticos_poligono_3_9.png" /> Laguna Redonda<br />\
    <img src="styles/legend/atractivos_turisticos_poligono_3_10.png" /> Laguna Tres Pascualas<br />\
    <img src="styles/legend/atractivos_turisticos_poligono_3_11.png" /> Playa Punta de Parra<br />\
    <img src="styles/legend/atractivos_turisticos_poligono_3_12.png" /> Playa Ramuntcho<br />\
    <img src="styles/legend/atractivos_turisticos_poligono_3_13.png" /> Playa Tres Pinos<br />\
    <img src="styles/legend/atractivos_turisticos_poligono_3_14.png" /> Plaza de la Independencia<br />\
    <img src="styles/legend/atractivos_turisticos_poligono_3_15.png" /> Universidad de Concepción<br />\
    <img src="styles/legend/atractivos_turisticos_poligono_3_16.png" /> Campos deportivos Bellavista<br />\
    <img src="styles/legend/atractivos_turisticos_poligono_3_17.png" /> Laguna Chica<br />\
    <img src="styles/legend/atractivos_turisticos_poligono_3_18.png" /> Parque ecuador<br />\
    <img src="styles/legend/atractivos_turisticos_poligono_3_19.png" /> Playa Penco<br />\
    <img src="styles/legend/atractivos_turisticos_poligono_3_20.png" /> Plaza condell<br />' });

lyr_ESRITopo_0.setVisible(true);lyr_Indicadores_barrios_AMC_1.setVisible(true);lyr_atractivosturisticos_2.setVisible(true);lyr_atractivos_turisticos_poligono_3.setVisible(true);
var layersList = [lyr_ESRITopo_0,lyr_Indicadores_barrios_AMC_1,lyr_atractivosturisticos_2,lyr_atractivos_turisticos_poligono_3];
lyr_Indicadores_barrios_AMC_1.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Area': 'Area', 'hab_m2': 'hab_m2', 'Sum_Poblac': 'Sum_Poblac', 'av_hab': 'av_hab', 'Long_tLic': 'Long_tLic', 'Long_tNLic': 'Long_tNLic', 'Suma_Trans': 'Suma_Trans', 'porc_cober': 'porc_cober', 'Distance': 'Distance', 'LongcicloK': 'LongcicloK', 'Long_rvial': 'Long_rvial', });
lyr_atractivosturisticos_2.set('fieldAliases', {'id': 'id', 'lugar': 'lugar', 'Comuna': 'Comuna', 'X': 'X', 'Y': 'Y', 'Actividad': 'Actividad', 'Costo': 'Costo', 'Acceso': 'Acceso', });
lyr_atractivos_turisticos_poligono_3.set('fieldAliases', {'id': 'id', 'lugar': 'lugar', 'comuna': 'comuna', 'X': 'X', 'Y': 'Y', 'actividad': 'actividad', 'costo': 'costo', 'Acceso': 'Acceso', });
lyr_Indicadores_barrios_AMC_1.set('fieldImages', {'Id': 'Range', 'Nombre': 'TextEdit', 'Area': 'TextEdit', 'hab_m2': 'TextEdit', 'Sum_Poblac': 'Range', 'av_hab': 'TextEdit', 'Long_tLic': 'TextEdit', 'Long_tNLic': 'TextEdit', 'Suma_Trans': 'TextEdit', 'porc_cober': 'TextEdit', 'Distance': 'TextEdit', 'LongcicloK': 'TextEdit', 'Long_rvial': 'TextEdit', });
lyr_atractivosturisticos_2.set('fieldImages', {'id': 'TextEdit', 'lugar': 'TextEdit', 'Comuna': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Actividad': 'TextEdit', 'Costo': 'TextEdit', 'Acceso': 'TextEdit', });
lyr_atractivos_turisticos_poligono_3.set('fieldImages', {'id': 'TextEdit', 'lugar': 'TextEdit', 'comuna': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'actividad': 'TextEdit', 'costo': 'TextEdit', 'Acceso': 'TextEdit', });
lyr_Indicadores_barrios_AMC_1.set('fieldLabels', {'Id': 'no label', 'Nombre': 'no label', 'Area': 'no label', 'hab_m2': 'no label', 'Sum_Poblac': 'no label', 'av_hab': 'no label', 'Long_tLic': 'no label', 'Long_tNLic': 'no label', 'Suma_Trans': 'no label', 'porc_cober': 'no label', 'Distance': 'no label', 'LongcicloK': 'no label', 'Long_rvial': 'no label', });
lyr_atractivosturisticos_2.set('fieldLabels', {'id': 'no label', 'lugar': 'no label', 'Comuna': 'no label', 'X': 'no label', 'Y': 'no label', 'Actividad': 'no label', 'Costo': 'no label', 'Acceso': 'no label', });
lyr_atractivos_turisticos_poligono_3.set('fieldLabels', {'id': 'no label', 'lugar': 'no label', 'comuna': 'no label', 'X': 'no label', 'Y': 'no label', 'actividad': 'no label', 'costo': 'no label', 'Acceso': 'no label', });
lyr_atractivos_turisticos_poligono_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
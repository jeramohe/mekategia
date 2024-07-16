var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_0a5empleados_2 = new ol.format.GeoJSON();
var features_0a5empleados_2 = format_0a5empleados_2.readFeatures(json_0a5empleados_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0a5empleados_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0a5empleados_2.addFeatures(features_0a5empleados_2);cluster_0a5empleados_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_0a5empleados_2
});
var lyr_0a5empleados_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_0a5empleados_2, 
                style: style_0a5empleados_2,
                popuplayertitle: "0 a 5 empleados",
                interactive: true,
                title: '<img src="styles/legend/0a5empleados_2.png" /> 0 a 5 empleados'
            });
var format_6a10empleados_3 = new ol.format.GeoJSON();
var features_6a10empleados_3 = format_6a10empleados_3.readFeatures(json_6a10empleados_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6a10empleados_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6a10empleados_3.addFeatures(features_6a10empleados_3);cluster_6a10empleados_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_6a10empleados_3
});
var lyr_6a10empleados_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_6a10empleados_3, 
                style: style_6a10empleados_3,
                popuplayertitle: "6 a 10 empleados",
                interactive: true,
                title: '<img src="styles/legend/6a10empleados_3.png" /> 6 a 10 empleados'
            });
var format_11a30empleados_4 = new ol.format.GeoJSON();
var features_11a30empleados_4 = format_11a30empleados_4.readFeatures(json_11a30empleados_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_11a30empleados_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_11a30empleados_4.addFeatures(features_11a30empleados_4);
var lyr_11a30empleados_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_11a30empleados_4, 
                style: style_11a30empleados_4,
                popuplayertitle: "11 a 30 empleados",
                interactive: true,
                title: '<img src="styles/legend/11a30empleados_4.png" /> 11 a 30 empleados'
            });
var format_51a100empleados_5 = new ol.format.GeoJSON();
var features_51a100empleados_5 = format_51a100empleados_5.readFeatures(json_51a100empleados_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_51a100empleados_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_51a100empleados_5.addFeatures(features_51a100empleados_5);
var lyr_51a100empleados_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_51a100empleados_5, 
                style: style_51a100empleados_5,
                popuplayertitle: "51 a 100 empleados",
                interactive: true,
                title: '<img src="styles/legend/51a100empleados_5.png" /> 51 a 100 empleados'
            });
var format_100a250empleados_6 = new ol.format.GeoJSON();
var features_100a250empleados_6 = format_100a250empleados_6.readFeatures(json_100a250empleados_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_100a250empleados_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100a250empleados_6.addFeatures(features_100a250empleados_6);
var lyr_100a250empleados_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_100a250empleados_6, 
                style: style_100a250empleados_6,
                popuplayertitle: "100 a 250 empleados",
                interactive: true,
                title: '<img src="styles/legend/100a250empleados_6.png" /> 100 a 250 empleados'
            });
var format_251ymsempleados_7 = new ol.format.GeoJSON();
var features_251ymsempleados_7 = format_251ymsempleados_7.readFeatures(json_251ymsempleados_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_251ymsempleados_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_251ymsempleados_7.addFeatures(features_251ymsempleados_7);
var lyr_251ymsempleados_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_251ymsempleados_7, 
                style: style_251ymsempleados_7,
                popuplayertitle: "251 y más empleados",
                interactive: true,
                title: '<img src="styles/legend/251ymsempleados_7.png" /> 251 y más empleados'
            });
var group_subgroup1 = new ol.layer.Group({
                                layers: [lyr_0a5empleados_2,lyr_6a10empleados_3,lyr_11a30empleados_4,lyr_51a100empleados_5,lyr_100a250empleados_6,lyr_251ymsempleados_7,],
                                fold: "open",
                                title: "sub-group1"});

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_0a5empleados_2.setVisible(true);lyr_6a10empleados_3.setVisible(true);lyr_11a30empleados_4.setVisible(true);lyr_51a100empleados_5.setVisible(true);lyr_100a250empleados_6.setVisible(true);lyr_251ymsempleados_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatelliteHybrid_1,group_subgroup1];
lyr_0a5empleados_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Nombre': 'Nombre', 'Razón_social': 'Razón_social', 'Actividad_comercial': 'Actividad_comercial', 'Empleados': 'Empleados', 'Dirección': 'Dirección', 'Teléfono': 'Teléfono', 'Email': 'Email', 'Pagweb': 'Pagweb', 'latitud': 'latitud', 'longitud': 'longitud', 'fecha_alta': 'fecha_alta', });
lyr_6a10empleados_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Nombre': 'Nombre', 'Razón_social': 'Razón_social', 'Actividad_comercial': 'Actividad_comercial', 'Empleados': 'Empleados', 'Dirección': 'Dirección', 'Teléfono': 'Teléfono', 'Email': 'Email', 'Pagweb': 'Pagweb', 'latitud': 'latitud', 'longitud': 'longitud', 'fecha_alta': 'fecha_alta', });
lyr_11a30empleados_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Nombre': 'Nombre', 'Razón_social': 'Razón_social', 'Actividad_comercial': 'Actividad_comercial', 'Empleados': 'Empleados', 'Dirección': 'Dirección', 'Teléfono': 'Teléfono', 'Email': 'Email', 'Pagweb': 'Pagweb', 'latitud': 'latitud', 'longitud': 'longitud', 'fecha_alta': 'fecha_alta', });
lyr_51a100empleados_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Nombre': 'Nombre', 'Razón_social': 'Razón_social', 'Actividad_comercial': 'Actividad_comercial', 'Empleados': 'Empleados', 'Dirección': 'Dirección', 'Teléfono': 'Teléfono', 'Email': 'Email', 'Pagweb': 'Pagweb', 'latitud': 'latitud', 'longitud': 'longitud', 'fecha_alta': 'fecha_alta', });
lyr_100a250empleados_6.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Nombre': 'Nombre', 'Razón_social': 'Razón_social', 'Actividad_comercial': 'Actividad_comercial', 'Empleados': 'Empleados', 'Dirección': 'Dirección', 'Teléfono': 'Teléfono', 'Email': 'Email', 'Pagweb': 'Pagweb', 'latitud': 'latitud', 'longitud': 'longitud', 'fecha_alta': 'fecha_alta', });
lyr_251ymsempleados_7.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Nombre': 'Nombre', 'Razón_social': 'Razón_social', 'Actividad_comercial': 'Actividad_comercial', 'Empleados': 'Empleados', 'Dirección': 'Dirección', 'Teléfono': 'Teléfono', 'Email': 'Email', 'Pagweb': 'Pagweb', 'latitud': 'latitud', 'longitud': 'longitud', 'fecha_alta': 'fecha_alta', });
lyr_0a5empleados_2.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'Nombre': '', 'Razón_social': '', 'Actividad_comercial': '', 'Empleados': '', 'Dirección': '', 'Teléfono': '', 'Email': '', 'Pagweb': '', 'latitud': '', 'longitud': '', 'fecha_alta': '', });
lyr_6a10empleados_3.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'Nombre': '', 'Razón_social': '', 'Actividad_comercial': '', 'Empleados': '', 'Dirección': '', 'Teléfono': '', 'Email': '', 'Pagweb': '', 'latitud': '', 'longitud': '', 'fecha_alta': '', });
lyr_11a30empleados_4.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'Nombre': '', 'Razón_social': '', 'Actividad_comercial': '', 'Empleados': '', 'Dirección': '', 'Teléfono': '', 'Email': '', 'Pagweb': '', 'latitud': '', 'longitud': '', 'fecha_alta': '', });
lyr_51a100empleados_5.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'Nombre': '', 'Razón_social': '', 'Actividad_comercial': '', 'Empleados': '', 'Dirección': '', 'Teléfono': '', 'Email': '', 'Pagweb': '', 'latitud': '', 'longitud': '', 'fecha_alta': '', });
lyr_100a250empleados_6.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'Nombre': '', 'Razón_social': '', 'Actividad_comercial': '', 'Empleados': '', 'Dirección': '', 'Teléfono': '', 'Email': '', 'Pagweb': '', 'latitud': '', 'longitud': '', 'fecha_alta': '', });
lyr_251ymsempleados_7.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'Nombre': '', 'Razón_social': '', 'Actividad_comercial': '', 'Empleados': '', 'Dirección': '', 'Teléfono': '', 'Email': '', 'Pagweb': '', 'latitud': '', 'longitud': '', 'fecha_alta': '', });
lyr_0a5empleados_2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Nombre': 'header label - always visible', 'Razón_social': 'inline label - visible with data', 'Actividad_comercial': 'inline label - visible with data', 'Empleados': 'inline label - visible with data', 'Dirección': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Pagweb': 'inline label - visible with data', 'latitud': 'no label', 'longitud': 'no label', 'fecha_alta': 'inline label - visible with data', });
lyr_6a10empleados_3.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Nombre': 'header label - visible with data', 'Razón_social': 'inline label - visible with data', 'Actividad_comercial': 'inline label - visible with data', 'Empleados': 'inline label - visible with data', 'Dirección': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Pagweb': 'inline label - visible with data', 'latitud': 'no label', 'longitud': 'no label', 'fecha_alta': 'inline label - visible with data', });
lyr_11a30empleados_4.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Nombre': 'header label - visible with data', 'Razón_social': 'inline label - visible with data', 'Actividad_comercial': 'inline label - visible with data', 'Empleados': 'inline label - visible with data', 'Dirección': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Pagweb': 'inline label - visible with data', 'latitud': 'no label', 'longitud': 'no label', 'fecha_alta': 'header label - visible with data', });
lyr_51a100empleados_5.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Nombre': 'header label - visible with data', 'Razón_social': 'inline label - visible with data', 'Actividad_comercial': 'inline label - visible with data', 'Empleados': 'inline label - visible with data', 'Dirección': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Pagweb': 'inline label - visible with data', 'latitud': 'no label', 'longitud': 'no label', 'fecha_alta': 'header label - visible with data', });
lyr_100a250empleados_6.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'inline label - always visible', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Nombre': 'header label - visible with data', 'Razón_social': 'inline label - visible with data', 'Actividad_comercial': 'inline label - visible with data', 'Empleados': 'inline label - visible with data', 'Dirección': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Pagweb': 'inline label - visible with data', 'latitud': 'no label', 'longitud': 'no label', 'fecha_alta': 'inline label - visible with data', });
lyr_251ymsempleados_7.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Nombre': 'header label - visible with data', 'Razón_social': 'inline label - visible with data', 'Actividad_comercial': 'inline label - visible with data', 'Empleados': 'inline label - visible with data', 'Dirección': 'inline label - visible with data', 'Teléfono': 'inline label - visible with data', 'Email': 'inline label - visible with data', 'Pagweb': 'inline label - visible with data', 'latitud': 'no label', 'longitud': 'no label', 'fecha_alta': 'header label - visible with data', });
lyr_251ymsempleados_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
var wms_layers = [];


        var lyr_Karte_0 = new ol.layer.Tile({
            'title': 'Karte',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Bunker_1 = new ol.format.GeoJSON();
var features_Bunker_1 = format_Bunker_1.readFeatures(json_Bunker_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bunker_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bunker_1.addFeatures(features_Bunker_1);
cluster_Bunker_1 = new ol.source.Cluster({
  distance: 20,
  source: jsonSource_Bunker_1
});
var lyr_Bunker_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Bunker_1, 
                style: style_Bunker_1,
                popuplayertitle: 'Bunker',
                interactive: true,
                title: '<img src="styles/legend/Bunker_1.png" /> Bunker'
            });
var format_LostPlace_2 = new ol.format.GeoJSON();
var features_LostPlace_2 = format_LostPlace_2.readFeatures(json_LostPlace_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LostPlace_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LostPlace_2.addFeatures(features_LostPlace_2);
cluster_LostPlace_2 = new ol.source.Cluster({
  distance: 20,
  source: jsonSource_LostPlace_2
});
var lyr_LostPlace_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_LostPlace_2, 
                style: style_LostPlace_2,
                popuplayertitle: 'Lost Place',
                interactive: true,
                title: '<img src="styles/legend/LostPlace_2.png" /> Lost Place'
            });
var format_verlasseneFriedhfe_3 = new ol.format.GeoJSON();
var features_verlasseneFriedhfe_3 = format_verlasseneFriedhfe_3.readFeatures(json_verlasseneFriedhfe_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_verlasseneFriedhfe_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_verlasseneFriedhfe_3.addFeatures(features_verlasseneFriedhfe_3);
cluster_verlasseneFriedhfe_3 = new ol.source.Cluster({
  distance: 20,
  source: jsonSource_verlasseneFriedhfe_3
});
var lyr_verlasseneFriedhfe_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_verlasseneFriedhfe_3, 
                style: style_verlasseneFriedhfe_3,
                popuplayertitle: 'verlassene Friedhöfe',
                interactive: true,
                title: '<img src="styles/legend/verlasseneFriedhfe_3.png" /> verlassene Friedhöfe'
            });
var format_Ruinen_4 = new ol.format.GeoJSON();
var features_Ruinen_4 = format_Ruinen_4.readFeatures(json_Ruinen_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruinen_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruinen_4.addFeatures(features_Ruinen_4);
cluster_Ruinen_4 = new ol.source.Cluster({
  distance: 20,
  source: jsonSource_Ruinen_4
});
var lyr_Ruinen_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Ruinen_4, 
                style: style_Ruinen_4,
                popuplayertitle: 'Ruinen',
                interactive: true,
                title: '<img src="styles/legend/Ruinen_4.png" /> Ruinen'
            });
var format_Wasserfall_5 = new ol.format.GeoJSON();
var features_Wasserfall_5 = format_Wasserfall_5.readFeatures(json_Wasserfall_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wasserfall_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wasserfall_5.addFeatures(features_Wasserfall_5);
cluster_Wasserfall_5 = new ol.source.Cluster({
  distance: 20,
  source: jsonSource_Wasserfall_5
});
var lyr_Wasserfall_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Wasserfall_5, 
                style: style_Wasserfall_5,
                popuplayertitle: 'Wasserfall',
                interactive: true,
                title: '<img src="styles/legend/Wasserfall_5.png" /> Wasserfall'
            });
var format_Hhlen_6 = new ol.format.GeoJSON();
var features_Hhlen_6 = format_Hhlen_6.readFeatures(json_Hhlen_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hhlen_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hhlen_6.addFeatures(features_Hhlen_6);
cluster_Hhlen_6 = new ol.source.Cluster({
  distance: 20,
  source: jsonSource_Hhlen_6
});
var lyr_Hhlen_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Hhlen_6, 
                style: style_Hhlen_6,
                popuplayertitle: 'Höhlen',
                interactive: true,
                title: '<img src="styles/legend/Hhlen_6.png" /> Höhlen'
            });

lyr_Karte_0.setVisible(true);lyr_Bunker_1.setVisible(true);lyr_LostPlace_2.setVisible(true);lyr_verlasseneFriedhfe_3.setVisible(true);lyr_Ruinen_4.setVisible(true);lyr_Wasserfall_5.setVisible(true);lyr_Hhlen_6.setVisible(true);
var layersList = [lyr_Karte_0,lyr_Bunker_1,lyr_LostPlace_2,lyr_verlasseneFriedhfe_3,lyr_Ruinen_4,lyr_Wasserfall_5,lyr_Hhlen_6];
lyr_Bunker_1.set('fieldAliases', {'name': 'name', 'longitude': 'longitude', 'latitude': 'latitude', });
lyr_LostPlace_2.set('fieldAliases', {'name': 'name', 'longitude': 'longitude', 'latitude': 'latitude', });
lyr_verlasseneFriedhfe_3.set('fieldAliases', {'name': 'name', 'longitude': 'longitude', 'latitude': 'latitude', });
lyr_Ruinen_4.set('fieldAliases', {'name': 'name', 'longitude': 'longitude', 'latitude': 'latitude', });
lyr_Wasserfall_5.set('fieldAliases', {'name': 'name', 'longitude': 'longitude', 'latitude': 'latitude', });
lyr_Hhlen_6.set('fieldAliases', {'name': 'name', 'longitude': 'longitude', 'latitude': 'latitude', });
lyr_Bunker_1.set('fieldImages', {'name': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', });
lyr_LostPlace_2.set('fieldImages', {'name': '', 'longitude': '', 'latitude': '', });
lyr_verlasseneFriedhfe_3.set('fieldImages', {'name': '', 'longitude': '', 'latitude': '', });
lyr_Ruinen_4.set('fieldImages', {'name': '', 'longitude': '', 'latitude': '', });
lyr_Wasserfall_5.set('fieldImages', {'name': '', 'longitude': '', 'latitude': '', });
lyr_Hhlen_6.set('fieldImages', {'name': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', });
lyr_Bunker_1.set('fieldLabels', {'name': 'inline label - always visible', 'longitude': 'inline label - always visible', 'latitude': 'inline label - always visible', });
lyr_LostPlace_2.set('fieldLabels', {'name': 'inline label - always visible', 'longitude': 'inline label - always visible', 'latitude': 'inline label - always visible', });
lyr_verlasseneFriedhfe_3.set('fieldLabels', {'name': 'inline label - always visible', 'longitude': 'inline label - always visible', 'latitude': 'inline label - always visible', });
lyr_Ruinen_4.set('fieldLabels', {'name': 'inline label - always visible', 'longitude': 'inline label - always visible', 'latitude': 'inline label - always visible', });
lyr_Wasserfall_5.set('fieldLabels', {'name': 'inline label - always visible', 'longitude': 'inline label - always visible', 'latitude': 'inline label - always visible', });
lyr_Hhlen_6.set('fieldLabels', {'name': 'inline label - always visible', 'longitude': 'inline label - always visible', 'latitude': 'inline label - always visible', });
lyr_Hhlen_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
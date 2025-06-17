var wms_layers = [];

var format_ADMINISTRASIKECAMATAN_AR_50K_0 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_0 = format_ADMINISTRASIKECAMATAN_AR_50K_0.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_0.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_0);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_0, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_0,
                popuplayertitle: 'ADMINISTRASIKECAMATAN_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0.png" /> ADMINISTRASIKECAMATAN_AR_50K'
            });
var format_SUNGAI_LN_50K_1 = new ol.format.GeoJSON();
var features_SUNGAI_LN_50K_1 = format_SUNGAI_LN_50K_1.readFeatures(json_SUNGAI_LN_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_50K_1.addFeatures(features_SUNGAI_LN_50K_1);
var lyr_SUNGAI_LN_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_50K_1, 
                style: style_SUNGAI_LN_50K_1,
                popuplayertitle: 'SUNGAI_LN_50K',
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_50K_1.png" /> SUNGAI_LN_50K'
            });
var format_JALAN_LN_50K_2 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_2 = format_JALAN_LN_50K_2.readFeatures(json_JALAN_LN_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_2.addFeatures(features_JALAN_LN_50K_2);
var lyr_JALAN_LN_50K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_50K_2, 
                style: style_JALAN_LN_50K_2,
                popuplayertitle: 'JALAN_LN_50K',
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_50K_2.png" /> JALAN_LN_50K'
            });
var format_PEMERINTAHAN_PT_50K_3 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_50K_3 = format_PEMERINTAHAN_PT_50K_3.readFeatures(json_PEMERINTAHAN_PT_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMERINTAHAN_PT_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_50K_3.addFeatures(features_PEMERINTAHAN_PT_50K_3);
var lyr_PEMERINTAHAN_PT_50K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMERINTAHAN_PT_50K_3, 
                style: style_PEMERINTAHAN_PT_50K_3,
                popuplayertitle: 'PEMERINTAHAN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_50K_3.png" /> PEMERINTAHAN_PT_50K'
            });
var format_PENDIDIKAN_PT_50K_4 = new ol.format.GeoJSON();
var features_PENDIDIKAN_PT_50K_4 = format_PENDIDIKAN_PT_50K_4.readFeatures(json_PENDIDIKAN_PT_50K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENDIDIKAN_PT_50K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_PT_50K_4.addFeatures(features_PENDIDIKAN_PT_50K_4);
var lyr_PENDIDIKAN_PT_50K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PENDIDIKAN_PT_50K_4, 
                style: style_PENDIDIKAN_PT_50K_4,
                popuplayertitle: 'PENDIDIKAN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_PT_50K_4.png" /> PENDIDIKAN_PT_50K'
            });
var format_RUMAHSAKIT_PT_50K_5 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_PT_50K_5 = format_RUMAHSAKIT_PT_50K_5.readFeatures(json_RUMAHSAKIT_PT_50K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKIT_PT_50K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKIT_PT_50K_5.addFeatures(features_RUMAHSAKIT_PT_50K_5);
var lyr_RUMAHSAKIT_PT_50K_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUMAHSAKIT_PT_50K_5, 
                style: style_RUMAHSAKIT_PT_50K_5,
                popuplayertitle: 'RUMAHSAKIT_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/RUMAHSAKIT_PT_50K_5.png" /> RUMAHSAKIT_PT_50K'
            });
var format_BANGUNAN_PT_50K_6 = new ol.format.GeoJSON();
var features_BANGUNAN_PT_50K_6 = format_BANGUNAN_PT_50K_6.readFeatures(json_BANGUNAN_PT_50K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_PT_50K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_PT_50K_6.addFeatures(features_BANGUNAN_PT_50K_6);
var lyr_BANGUNAN_PT_50K_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNAN_PT_50K_6, 
                style: style_BANGUNAN_PT_50K_6,
                popuplayertitle: 'BANGUNAN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_PT_50K_6.png" /> BANGUNAN_PT_50K'
            });

lyr_ADMINISTRASIKECAMATAN_AR_50K_0.setVisible(true);lyr_SUNGAI_LN_50K_1.setVisible(true);lyr_JALAN_LN_50K_2.setVisible(true);lyr_PEMERINTAHAN_PT_50K_3.setVisible(true);lyr_PENDIDIKAN_PT_50K_4.setVisible(true);lyr_RUMAHSAKIT_PT_50K_5.setVisible(true);lyr_BANGUNAN_PT_50K_6.setVisible(true);
var layersList = [lyr_ADMINISTRASIKECAMATAN_AR_50K_0,lyr_SUNGAI_LN_50K_1,lyr_JALAN_LN_50K_2,lyr_PEMERINTAHAN_PT_50K_3,lyr_PENDIDIKAN_PT_50K_4,lyr_RUMAHSAKIT_PT_50K_5,lyr_BANGUNAN_PT_50K_6];
lyr_ADMINISTRASIKECAMATAN_AR_50K_0.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SUNGAI_LN_50K_1.set('fieldAliases', {'REMARK': 'REMARK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_LN_50K_2.set('fieldAliases', {'REMARK': 'REMARK', 'LCODE': 'LCODE', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PEMERINTAHAN_PT_50K_3.set('fieldAliases', {'REMARK': 'REMARK', });
lyr_PENDIDIKAN_PT_50K_4.set('fieldAliases', {'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', });
lyr_RUMAHSAKIT_PT_50K_5.set('fieldAliases', {'REMARK': 'REMARK', 'JPLYRS': 'JPLYRS', });
lyr_BANGUNAN_PT_50K_6.set('fieldAliases', {'REMARK': 'REMARK', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_0.set('fieldImages', {'NAMOBJ': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_SUNGAI_LN_50K_1.set('fieldImages', {'REMARK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_JALAN_LN_50K_2.set('fieldImages', {'REMARK': 'TextEdit', 'LCODE': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_PEMERINTAHAN_PT_50K_3.set('fieldImages', {'REMARK': 'TextEdit', });
lyr_PENDIDIKAN_PT_50K_4.set('fieldImages', {'FGGPDK': 'Range', 'REMARK': 'TextEdit', });
lyr_RUMAHSAKIT_PT_50K_5.set('fieldImages', {'REMARK': 'TextEdit', 'JPLYRS': 'Range', });
lyr_BANGUNAN_PT_50K_6.set('fieldImages', {'REMARK': 'TextEdit', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_0.set('fieldLabels', {'NAMOBJ': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SUNGAI_LN_50K_1.set('fieldLabels', {'REMARK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_LN_50K_2.set('fieldLabels', {'REMARK': 'no label', 'LCODE': 'no label', 'SHAPE_Leng': 'no label', });
lyr_PEMERINTAHAN_PT_50K_3.set('fieldLabels', {'REMARK': 'no label', });
lyr_PENDIDIKAN_PT_50K_4.set('fieldLabels', {'FGGPDK': 'no label', 'REMARK': 'no label', });
lyr_RUMAHSAKIT_PT_50K_5.set('fieldLabels', {'REMARK': 'no label', 'JPLYRS': 'no label', });
lyr_BANGUNAN_PT_50K_6.set('fieldLabels', {'REMARK': 'no label', });
lyr_BANGUNAN_PT_50K_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
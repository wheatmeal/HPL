ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2193").setExtent([1641398.731796, 5615313.008845, 1762445.606919, 5688973.008921]);
var wms_layers = [];


        var lyr_LINZBasemaps_0 = new ol.layer.Tile({
            'title': 'LINZ Basemaps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://basemaps.linz.govt.nz/v1/tiles/aerial/WebMercatorQuad/{z}/{x}/{y}.webp?api=c01gk04pxdcq9q2jtt0x00wqj6m'
            })
        });
var format_HPLClass3_1 = new ol.format.GeoJSON();
var features_HPLClass3_1 = format_HPLClass3_1.readFeatures(json_HPLClass3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_HPLClass3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HPLClass3_1.addFeatures(features_HPLClass3_1);
var lyr_HPLClass3_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HPLClass3_1, 
                style: style_HPLClass3_1,
                interactive: true,
                title: '<img src="styles/legend/HPLClass3_1.png" /> HPL - Class 3'
            });
var format_HPLClass2_2 = new ol.format.GeoJSON();
var features_HPLClass2_2 = format_HPLClass2_2.readFeatures(json_HPLClass2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_HPLClass2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HPLClass2_2.addFeatures(features_HPLClass2_2);
var lyr_HPLClass2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HPLClass2_2, 
                style: style_HPLClass2_2,
                interactive: true,
                title: '<img src="styles/legend/HPLClass2_2.png" /> HPL - Class 2'
            });
var format_HPLClass1_3 = new ol.format.GeoJSON();
var features_HPLClass1_3 = format_HPLClass1_3.readFeatures(json_HPLClass1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_HPLClass1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HPLClass1_3.addFeatures(features_HPLClass1_3);
var lyr_HPLClass1_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HPLClass1_3, 
                style: style_HPLClass1_3,
                interactive: true,
                title: '<img src="styles/legend/HPLClass1_3.png" /> HPL - Class 1'
            });
var format_Districtboundaries_4 = new ol.format.GeoJSON();
var features_Districtboundaries_4 = format_Districtboundaries_4.readFeatures(json_Districtboundaries_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_Districtboundaries_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Districtboundaries_4.addFeatures(features_Districtboundaries_4);
var lyr_Districtboundaries_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Districtboundaries_4, 
                style: style_Districtboundaries_4,
                interactive: false,
                title: '<img src="styles/legend/Districtboundaries_4.png" /> District boundaries'
            });

lyr_LINZBasemaps_0.setVisible(true);lyr_HPLClass3_1.setVisible(true);lyr_HPLClass2_2.setVisible(true);lyr_HPLClass1_3.setVisible(true);lyr_Districtboundaries_4.setVisible(true);
var layersList = [lyr_LINZBasemaps_0,lyr_HPLClass3_1,lyr_HPLClass2_2,lyr_HPLClass1_3,lyr_Districtboundaries_4];
lyr_HPLClass3_1.set('fieldAliases', {'luc': 'luc', 'lcorr': 'lcorr', 'nzcu': 'nzcu', 'type': 'type', 'lcorrclass': 'lcorrclass', 'lcorrlim': 'lcorrlim', 'lcorrunit': 'lcorrunit', 'regname': 'regname', 'rock': 'rock', 'toprock': 'toprock', 'baserock': 'baserock', 'rock2': 'rock2', 'surcode': 'surcode', 'mainsoil': 'mainsoil', 'soil': 'soil', 'nzsc': 'nzsc', 'slope': 'slope', 'erosion': 'erosion', 'veg': 'veg', 'veg2': 'veg2', 'ccav': 'ccav', 'ccto_1': 'ccto_1', 'ccpo': 'ccpo', 'prsir': 'prsir', 'prsic': 'prsic', 'prsiav': 'prsiav', 'edition_1': 'edition_1', 'polyid': 'polyid', 'domluc': 'domluc', 'present_er': 'present_er', 'potential_': 'potential_', 'origin': 'origin', 'nld_legend': 'nld_legend', 'wko_legend': 'wko_legend', 'cor_legend': 'cor_legend', 'bop_legend': 'bop_legend', 'ebp_legend': 'ebp_legend', 'gec_legend': 'gec_legend', 'nhb_legend': 'nhb_legend', 'shw_legend': 'shw_legend', 'wln_legend': 'wln_legend', 'tmu_legend': 'tmu_legend', 'si_legend': 'si_legend', 'marl_legen': 'marl_legen', 'nzcu_descr': 'nzcu_descr', 'orig_ni_si': 'orig_ni_si', 'the_geom_L': 'the_geom_L', 'the_geom_A': 'the_geom_A', });
lyr_HPLClass2_2.set('fieldAliases', {'luc': 'luc', 'lcorr': 'lcorr', 'nzcu': 'nzcu', 'type': 'type', 'lcorrclass': 'lcorrclass', 'lcorrlim': 'lcorrlim', 'lcorrunit': 'lcorrunit', 'regname': 'regname', 'rock': 'rock', 'toprock': 'toprock', 'baserock': 'baserock', 'rock2': 'rock2', 'surcode': 'surcode', 'mainsoil': 'mainsoil', 'soil': 'soil', 'nzsc': 'nzsc', 'slope': 'slope', 'erosion': 'erosion', 'veg': 'veg', 'veg2': 'veg2', 'ccav': 'ccav', 'ccto_1': 'ccto_1', 'ccpo': 'ccpo', 'prsir': 'prsir', 'prsic': 'prsic', 'prsiav': 'prsiav', 'edition_1': 'edition_1', 'polyid': 'polyid', 'domluc': 'domluc', 'present_er': 'present_er', 'potential_': 'potential_', 'origin': 'origin', 'nld_legend': 'nld_legend', 'wko_legend': 'wko_legend', 'cor_legend': 'cor_legend', 'bop_legend': 'bop_legend', 'ebp_legend': 'ebp_legend', 'gec_legend': 'gec_legend', 'nhb_legend': 'nhb_legend', 'shw_legend': 'shw_legend', 'wln_legend': 'wln_legend', 'tmu_legend': 'tmu_legend', 'si_legend': 'si_legend', 'marl_legen': 'marl_legen', 'nzcu_descr': 'nzcu_descr', 'orig_ni_si': 'orig_ni_si', 'the_geom_L': 'the_geom_L', 'the_geom_A': 'the_geom_A', });
lyr_HPLClass1_3.set('fieldAliases', {'luc': 'luc', 'lcorr': 'lcorr', 'nzcu': 'nzcu', 'type': 'type', 'lcorrclass': 'lcorrclass', 'lcorrlim': 'lcorrlim', 'lcorrunit': 'lcorrunit', 'regname': 'regname', 'rock': 'rock', 'toprock': 'toprock', 'baserock': 'baserock', 'rock2': 'rock2', 'surcode': 'surcode', 'mainsoil': 'mainsoil', 'soil': 'soil', 'nzsc': 'nzsc', 'slope': 'slope', 'erosion': 'erosion', 'veg': 'veg', 'veg2': 'veg2', 'ccav': 'ccav', 'ccto_1': 'ccto_1', 'ccpo': 'ccpo', 'prsir': 'prsir', 'prsic': 'prsic', 'prsiav': 'prsiav', 'edition_1': 'edition_1', 'polyid': 'polyid', 'domluc': 'domluc', 'present_er': 'present_er', 'potential_': 'potential_', 'origin': 'origin', 'nld_legend': 'nld_legend', 'wko_legend': 'wko_legend', 'cor_legend': 'cor_legend', 'bop_legend': 'bop_legend', 'ebp_legend': 'ebp_legend', 'gec_legend': 'gec_legend', 'nhb_legend': 'nhb_legend', 'shw_legend': 'shw_legend', 'wln_legend': 'wln_legend', 'tmu_legend': 'tmu_legend', 'si_legend': 'si_legend', 'marl_legen': 'marl_legen', 'nzcu_descr': 'nzcu_descr', 'orig_ni_si': 'orig_ni_si', 'the_geom_L': 'the_geom_L', 'the_geom_A': 'the_geom_A', });
lyr_Districtboundaries_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TA12': 'TA12', 'NAME': 'NAME', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_HPLClass3_1.set('fieldImages', {'luc': 'TextEdit', 'lcorr': 'TextEdit', 'nzcu': 'TextEdit', 'type': 'TextEdit', 'lcorrclass': 'TextEdit', 'lcorrlim': 'TextEdit', 'lcorrunit': 'TextEdit', 'regname': 'TextEdit', 'rock': 'TextEdit', 'toprock': 'TextEdit', 'baserock': 'TextEdit', 'rock2': 'TextEdit', 'surcode': 'TextEdit', 'mainsoil': 'TextEdit', 'soil': 'TextEdit', 'nzsc': 'TextEdit', 'slope': 'TextEdit', 'erosion': 'TextEdit', 'veg': 'TextEdit', 'veg2': 'TextEdit', 'ccav': 'TextEdit', 'ccto_1': 'TextEdit', 'ccpo': 'TextEdit', 'prsir': 'TextEdit', 'prsic': 'TextEdit', 'prsiav': 'TextEdit', 'edition_1': 'TextEdit', 'polyid': 'TextEdit', 'domluc': 'TextEdit', 'present_er': 'TextEdit', 'potential_': 'TextEdit', 'origin': 'TextEdit', 'nld_legend': 'TextEdit', 'wko_legend': 'TextEdit', 'cor_legend': 'TextEdit', 'bop_legend': 'TextEdit', 'ebp_legend': 'TextEdit', 'gec_legend': 'TextEdit', 'nhb_legend': 'TextEdit', 'shw_legend': 'TextEdit', 'wln_legend': 'TextEdit', 'tmu_legend': 'TextEdit', 'si_legend': 'TextEdit', 'marl_legen': 'TextEdit', 'nzcu_descr': 'TextEdit', 'orig_ni_si': 'TextEdit', 'the_geom_L': 'TextEdit', 'the_geom_A': 'TextEdit', });
lyr_HPLClass2_2.set('fieldImages', {'luc': 'TextEdit', 'lcorr': 'TextEdit', 'nzcu': 'TextEdit', 'type': 'TextEdit', 'lcorrclass': 'TextEdit', 'lcorrlim': 'TextEdit', 'lcorrunit': 'TextEdit', 'regname': 'TextEdit', 'rock': 'TextEdit', 'toprock': 'TextEdit', 'baserock': 'TextEdit', 'rock2': 'TextEdit', 'surcode': 'TextEdit', 'mainsoil': 'TextEdit', 'soil': 'TextEdit', 'nzsc': 'TextEdit', 'slope': 'TextEdit', 'erosion': 'TextEdit', 'veg': 'TextEdit', 'veg2': 'TextEdit', 'ccav': 'TextEdit', 'ccto_1': 'TextEdit', 'ccpo': 'TextEdit', 'prsir': 'TextEdit', 'prsic': 'TextEdit', 'prsiav': 'TextEdit', 'edition_1': 'TextEdit', 'polyid': 'TextEdit', 'domluc': 'TextEdit', 'present_er': 'TextEdit', 'potential_': 'TextEdit', 'origin': 'TextEdit', 'nld_legend': 'TextEdit', 'wko_legend': 'TextEdit', 'cor_legend': 'TextEdit', 'bop_legend': 'TextEdit', 'ebp_legend': 'TextEdit', 'gec_legend': 'TextEdit', 'nhb_legend': 'TextEdit', 'shw_legend': 'TextEdit', 'wln_legend': 'TextEdit', 'tmu_legend': 'TextEdit', 'si_legend': 'TextEdit', 'marl_legen': 'TextEdit', 'nzcu_descr': 'TextEdit', 'orig_ni_si': 'TextEdit', 'the_geom_L': 'TextEdit', 'the_geom_A': 'TextEdit', });
lyr_HPLClass1_3.set('fieldImages', {'luc': 'TextEdit', 'lcorr': 'TextEdit', 'nzcu': 'TextEdit', 'type': 'TextEdit', 'lcorrclass': 'TextEdit', 'lcorrlim': 'TextEdit', 'lcorrunit': 'TextEdit', 'regname': 'TextEdit', 'rock': 'TextEdit', 'toprock': 'TextEdit', 'baserock': 'TextEdit', 'rock2': 'TextEdit', 'surcode': 'TextEdit', 'mainsoil': 'TextEdit', 'soil': 'TextEdit', 'nzsc': 'TextEdit', 'slope': 'TextEdit', 'erosion': 'TextEdit', 'veg': 'TextEdit', 'veg2': 'TextEdit', 'ccav': 'TextEdit', 'ccto_1': 'TextEdit', 'ccpo': 'TextEdit', 'prsir': 'TextEdit', 'prsic': 'TextEdit', 'prsiav': 'TextEdit', 'edition_1': 'TextEdit', 'polyid': 'TextEdit', 'domluc': 'TextEdit', 'present_er': 'TextEdit', 'potential_': 'TextEdit', 'origin': 'TextEdit', 'nld_legend': 'TextEdit', 'wko_legend': 'TextEdit', 'cor_legend': 'TextEdit', 'bop_legend': 'TextEdit', 'ebp_legend': 'TextEdit', 'gec_legend': 'TextEdit', 'nhb_legend': 'TextEdit', 'shw_legend': 'TextEdit', 'wln_legend': 'TextEdit', 'tmu_legend': 'TextEdit', 'si_legend': 'TextEdit', 'marl_legen': 'TextEdit', 'nzcu_descr': 'TextEdit', 'orig_ni_si': 'TextEdit', 'the_geom_L': 'TextEdit', 'the_geom_A': 'TextEdit', });
lyr_Districtboundaries_4.set('fieldImages', {'OBJECTID': '', 'TA12': '', 'NAME': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_HPLClass3_1.set('fieldLabels', {'luc': 'inline label', 'lcorr': 'inline label', 'nzcu': 'inline label', 'type': 'inline label', 'lcorrclass': 'inline label', 'lcorrlim': 'inline label', 'lcorrunit': 'inline label', 'regname': 'inline label', 'rock': 'inline label', 'toprock': 'no label', 'baserock': 'inline label', 'rock2': 'inline label', 'surcode': 'inline label', 'mainsoil': 'inline label', 'soil': 'inline label', 'nzsc': 'inline label', 'slope': 'inline label', 'erosion': 'inline label', 'veg': 'inline label', 'veg2': 'inline label', 'ccav': 'inline label', 'ccto_1': 'inline label', 'ccpo': 'inline label', 'prsir': 'inline label', 'prsic': 'inline label', 'prsiav': 'inline label', 'edition_1': 'inline label', 'polyid': 'inline label', 'domluc': 'inline label', 'present_er': 'inline label', 'potential_': 'inline label', 'origin': 'inline label', 'nld_legend': 'inline label', 'wko_legend': 'inline label', 'cor_legend': 'inline label', 'bop_legend': 'inline label', 'ebp_legend': 'inline label', 'gec_legend': 'inline label', 'nhb_legend': 'inline label', 'shw_legend': 'inline label', 'wln_legend': 'inline label', 'tmu_legend': 'inline label', 'si_legend': 'inline label', 'marl_legen': 'inline label', 'nzcu_descr': 'inline label', 'orig_ni_si': 'inline label', 'the_geom_L': 'inline label', 'the_geom_A': 'inline label', });
lyr_HPLClass2_2.set('fieldLabels', {'luc': 'inline label', 'lcorr': 'inline label', 'nzcu': 'inline label', 'type': 'inline label', 'lcorrclass': 'inline label', 'lcorrlim': 'inline label', 'lcorrunit': 'inline label', 'regname': 'inline label', 'rock': 'inline label', 'toprock': 'inline label', 'baserock': 'inline label', 'rock2': 'inline label', 'surcode': 'inline label', 'mainsoil': 'inline label', 'soil': 'inline label', 'nzsc': 'inline label', 'slope': 'inline label', 'erosion': 'inline label', 'veg': 'inline label', 'veg2': 'inline label', 'ccav': 'inline label', 'ccto_1': 'inline label', 'ccpo': 'inline label', 'prsir': 'inline label', 'prsic': 'inline label', 'prsiav': 'inline label', 'edition_1': 'inline label', 'polyid': 'inline label', 'domluc': 'inline label', 'present_er': 'inline label', 'potential_': 'inline label', 'origin': 'inline label', 'nld_legend': 'inline label', 'wko_legend': 'inline label', 'cor_legend': 'inline label', 'bop_legend': 'inline label', 'ebp_legend': 'inline label', 'gec_legend': 'inline label', 'nhb_legend': 'inline label', 'shw_legend': 'inline label', 'wln_legend': 'inline label', 'tmu_legend': 'inline label', 'si_legend': 'inline label', 'marl_legen': 'inline label', 'nzcu_descr': 'inline label', 'orig_ni_si': 'inline label', 'the_geom_L': 'inline label', 'the_geom_A': 'inline label', });
lyr_HPLClass1_3.set('fieldLabels', {'luc': 'inline label', 'lcorr': 'inline label', 'nzcu': 'inline label', 'type': 'inline label', 'lcorrclass': 'inline label', 'lcorrlim': 'inline label', 'lcorrunit': 'inline label', 'regname': 'inline label', 'rock': 'inline label', 'toprock': 'inline label', 'baserock': 'inline label', 'rock2': 'inline label', 'surcode': 'inline label', 'mainsoil': 'inline label', 'soil': 'inline label', 'nzsc': 'inline label', 'slope': 'inline label', 'erosion': 'inline label', 'veg': 'inline label', 'veg2': 'inline label', 'ccav': 'inline label', 'ccto_1': 'inline label', 'ccpo': 'inline label', 'prsir': 'inline label', 'prsic': 'inline label', 'prsiav': 'inline label', 'edition_1': 'inline label', 'polyid': 'inline label', 'domluc': 'inline label', 'present_er': 'inline label', 'potential_': 'inline label', 'origin': 'inline label', 'nld_legend': 'inline label', 'wko_legend': 'inline label', 'cor_legend': 'inline label', 'bop_legend': 'inline label', 'ebp_legend': 'inline label', 'gec_legend': 'inline label', 'nhb_legend': 'inline label', 'shw_legend': 'inline label', 'wln_legend': 'inline label', 'tmu_legend': 'inline label', 'si_legend': 'inline label', 'marl_legen': 'inline label', 'nzcu_descr': 'inline label', 'orig_ni_si': 'inline label', 'the_geom_L': 'inline label', 'the_geom_A': 'inline label', });
lyr_Districtboundaries_4.set('fieldLabels', {'OBJECTID': 'no label', 'TA12': 'no label', 'NAME': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Districtboundaries_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

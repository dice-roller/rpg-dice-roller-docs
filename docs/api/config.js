exports.fileTree = [{
  'name': 'ComparePoint',
  'path': '/ComparePoint',
  'fullPath': 'src/ComparePoint',
  'ext': '.js'
}, {'name': 'Description', 'path': '/Description', 'fullPath': 'src/Description', 'ext': '.js'}, {
  'name': 'DiceRoll',
  'path': '/DiceRoll',
  'fullPath': 'src/DiceRoll',
  'ext': '.js'
}, {'name': 'DiceRoller', 'path': '/DiceRoller', 'fullPath': 'src/DiceRoller', 'ext': '.js'}, {
  'name': 'RollGroup',
  'path': '/RollGroup',
  'fullPath': 'src/RollGroup',
  'ext': '.js'
}, {
  'name': 'dice',
  'children': [{
    'name': 'FudgeDice',
    'path': '/FudgeDice',
    'fullPath': 'src/dice/FudgeDice',
    'ext': '.js'
  }, {
    'name': 'PercentileDice',
    'path': '/PercentileDice',
    'fullPath': 'src/dice/PercentileDice',
    'ext': '.js'
  }, {'name': 'StandardDice', 'path': '/StandardDice', 'fullPath': 'src/dice/StandardDice', 'ext': '.js'}]
}, {
  'name': 'exceptions',
  'children': [{
    'name': 'CompareOperatorError',
    'path': '/CompareOperatorError',
    'fullPath': 'src/exceptions/CompareOperatorError',
    'ext': '.js'
  }, {
    'name': 'DataFormatError',
    'path': '/DataFormatError',
    'fullPath': 'src/exceptions/DataFormatError',
    'ext': '.js'
  }, {
    'name': 'DieActionValueError',
    'path': '/DieActionValueError',
    'fullPath': 'src/exceptions/DieActionValueError',
    'ext': '.js'
  }, {
    'name': 'NotationError',
    'path': '/NotationError',
    'fullPath': 'src/exceptions/NotationError',
    'ext': '.js'
  }, {
    'name': 'RequiredArgumentError',
    'path': '/RequiredArgumentError',
    'fullPath': 'src/exceptions/RequiredArgumentError',
    'ext': '.js'
  }]
}, {
  'name': 'modifiers',
  'children': [{
    'name': 'ComparisonModifier',
    'path': '/ComparisonModifier',
    'fullPath': 'src/modifiers/ComparisonModifier',
    'ext': '.js'
  }, {
    'name': 'CriticalFailureModifier',
    'path': '/CriticalFailureModifier',
    'fullPath': 'src/modifiers/CriticalFailureModifier',
    'ext': '.js'
  }, {
    'name': 'CriticalSuccessModifier',
    'path': '/CriticalSuccessModifier',
    'fullPath': 'src/modifiers/CriticalSuccessModifier',
    'ext': '.js'
  }, {
    'name': 'DropModifier',
    'path': '/DropModifier',
    'fullPath': 'src/modifiers/DropModifier',
    'ext': '.js'
  }, {
    'name': 'ExplodeModifier',
    'path': '/ExplodeModifier',
    'fullPath': 'src/modifiers/ExplodeModifier',
    'ext': '.js'
  }, {
    'name': 'KeepModifier',
    'path': '/KeepModifier',
    'fullPath': 'src/modifiers/KeepModifier',
    'ext': '.js'
  }, {
    'name': 'MaxModifier',
    'path': '/MaxModifier',
    'fullPath': 'src/modifiers/MaxModifier',
    'ext': '.js'
  }, {
    'name': 'MinModifier',
    'path': '/MinModifier',
    'fullPath': 'src/modifiers/MinModifier',
    'ext': '.js'
  }, {
    'name': 'Modifier',
    'path': '/Modifier',
    'fullPath': 'src/modifiers/Modifier',
    'ext': '.js'
  }, {
    'name': 'ReRollModifier',
    'path': '/ReRollModifier',
    'fullPath': 'src/modifiers/ReRollModifier',
    'ext': '.js'
  }, {
    'name': 'SortingModifier',
    'path': '/SortingModifier',
    'fullPath': 'src/modifiers/SortingModifier',
    'ext': '.js'
  }, {
    'name': 'TargetModifier',
    'path': '/TargetModifier',
    'fullPath': 'src/modifiers/TargetModifier',
    'ext': '.js'
  }, {'name': 'modifier-flags', 'path': '/modifier-flags', 'fullPath': 'src/modifiers/modifier-flags', 'ext': '.js'}]
}, {
  'name': 'parser',
  'children': [{
    'name': 'Parser',
    'path': '/Parser',
    'fullPath': 'src/parser/Parser',
    'ext': '.js'
  }, {
    'name': 'grammars',
    'children': [{
      'name': 'grammar',
      'path': '/grammar',
      'fullPath': 'src/parser/grammars/grammar',
      'ext': '.js'
    }, {'name': 'grammar', 'path': '/grammar', 'fullPath': 'src/parser/grammars/grammar', 'ext': '.pegjs'}]
  }]
}, {
  'name': 'results',
  'children': [{
    'name': 'ResultGroup',
    'path': '/ResultGroup',
    'fullPath': 'src/results/ResultGroup',
    'ext': '.js'
  }, {
    'name': 'RollResult',
    'path': '/RollResult',
    'fullPath': 'src/results/RollResult',
    'ext': '.js'
  }, {'name': 'RollResults', 'path': '/RollResults', 'fullPath': 'src/results/RollResults', 'ext': '.js'}]
}, {
  'name': 'traits',
  'children': [{
    'name': 'HasDescription',
    'path': '/HasDescription',
    'fullPath': 'src/traits/HasDescription',
    'ext': '.js'
  }]
}, {
  'name': 'utilities',
  'children': [{
    'name': 'ExportFormats',
    'path': '/ExportFormats',
    'fullPath': 'src/utilities/ExportFormats',
    'ext': '.js'
  }, {
    'name': 'NumberGenerator',
    'path': '/NumberGenerator',
    'fullPath': 'src/utilities/NumberGenerator',
    'ext': '.js'
  }, {'name': 'math', 'path': '/math', 'fullPath': 'src/utilities/math', 'ext': '.js'}, {
    'name': 'utils',
    'path': '/utils',
    'fullPath': 'src/utilities/utils',
    'ext': '.js'
  }]
}];
exports.sidebarTree = (title = 'Mainpage') => ({
  '/api/': [{
    'text': 'API',
    'collapsable': false,
    'children': [{link: '/api/', text: '' + title + ''}, '/api/ComparePoint', '/api/Description', '/api/DiceRoll', '/api/DiceRoller', '/api/RollGroup']
  }, {
    'text': 'dice',
    'collapsable': false,
    'children': ['/api/dice/FudgeDice', '/api/dice/PercentileDice', '/api/dice/StandardDice']
  }, {
    'text': 'exceptions',
    'collapsable': false,
    'children': ['/api/exceptions/CompareOperatorError', '/api/exceptions/DataFormatError', '/api/exceptions/DieActionValueError', '/api/exceptions/NotationError', '/api/exceptions/RequiredArgumentError']
  }, {
    'text': 'modifiers',
    'collapsable': false,
    'children': ['/api/modifiers/ComparisonModifier', '/api/modifiers/CriticalFailureModifier', '/api/modifiers/CriticalSuccessModifier', '/api/modifiers/DropModifier', '/api/modifiers/ExplodeModifier', '/api/modifiers/KeepModifier', '/api/modifiers/MaxModifier', '/api/modifiers/MinModifier', '/api/modifiers/Modifier', '/api/modifiers/ReRollModifier', '/api/modifiers/SortingModifier', '/api/modifiers/TargetModifier', '/api/modifiers/modifier-flags']
  }, {'text': 'parser', 'collapsable': false, 'children': ['/api/parser/Parser']}, {
    'text': 'results',
    'collapsable': false,
    'children': ['/api/results/ResultGroup', '/api/results/RollResult', '/api/results/RollResults']
  }, {'text': 'traits', 'collapsable': false, 'children': ['/api/traits/HasDescription']}, {
    'text': 'utilities',
    'collapsable': false,
    'children': ['/api/utilities/ExportFormats', '/api/utilities/NumberGenerator', '/api/utilities/math', '/api/utilities/utils']
  }]
});

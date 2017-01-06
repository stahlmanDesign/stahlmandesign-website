'use strict';

//const debug = require('debug')('jitbase:processRefNumber');

var JITBASE = JITBASE || {};

JITBASE.processRefNoMask = function(inputMask, tags, team) {

    // REGEX strings
    var mainRe = /<((tagName|tagAbbr)\d+\.\d+|(teamName|teamAbbr))>/;
    var maskNameRe = /\D+/;
    var maskNumRe = /\d+\.\d+/;

    // Delimiter chars
    var openMaskChar = '<';
    var closeMaskChar = '>';


    // Keywords
    var tagNameCode = 'tagName';
    var tagAbbrCode = 'tagAbbr';
    var teamNameCode = 'teamName';
    var teamAbbrClode = 'teamAbbr';

    var errors = [];



    inputMask = inputMask.trim();

    var openMaskCharCount = 0;
    var errorMessage = '';


    let outputResult = inputMask;

    if (inputMask.length) {
        for (var i = 0, l = inputMask.length; i < l; i++) {
            var currentChar = inputMask[i];

            if (currentChar === openMaskChar)
                openMaskCharCount += 1;

            if (currentChar === closeMaskChar)
                openMaskCharCount -= 1;
        }
    }

    if (openMaskCharCount === 1)
        errors.push('Error:  tags not closed');

    if (openMaskCharCount > 1)
        errors.push('Error:  too many open tags');

    if (openMaskCharCount < 0)
        errors.push('Error: too many closing tags');


    if (!errorMessage) {
        let index = 0;
        let matches = [];
        let results = [];
        let result;
        let tmpMask = inputMask;

        while (mainRe.exec(tmpMask)) {
            result = mainRe.exec(tmpMask);
            matches.push(result[1]);
            index = result.index;
            tmpMask = tmpMask.substring(index + 1);
        }

        if (matches) {
            matches.forEach((match) => {
                let maskCommand = maskNameRe.exec(match)[0];

                switch (maskCommand) {
                    case 'tagName':
                        getTagResult(match, results, 'name');
                        break;
                    case 'tagAbbr':
                        getTagResult(match, results, 'abbr');
                        break;
                    case 'teamName':
                        results.push(team.name);
                        break;
                    case 'teamAbbr':
                        results.push(team.abbr);
                        break;
                    default:
                        results.push(match);
                }
            });
        }

        if (results) {
            for (var i = 0, l = matches.length; i < l; i++) {
                outputResult = outputResult.replace('<' + matches[i] + '>', results[i]);
            }

        }
    }

    let retVal = {};
    retVal.error = errors;
    retVal.result = outputResult;
    return retVal;

    function getTagResult(match, results, prop) {

        var indexMatch, index1Match, index2Match;
        indexMatch = (maskNumRe.exec(match)[0]).split('.');
        index1Match = +(indexMatch[0]);
        index2Match = +(indexMatch[1]);

        if (index1Match <= tags.length) {
            let tag = tags[index1Match - 1];
            if (index2Match <= tag.length) {
                let subTag = tag[index2Match - 1];
                if(prop === 'name'){
                  results.push(subTag.name || subTag);
                }else{
                  if(subTag[prop]){
                    results.push(subTag[prop]);
                  }else{
                    results.push('');
                    errors.push('Error with input <' + match + '>.  The tag requested does not have a ' + prop + ' property');
                  }
                }
            } else {
                results.push('');
                errors.push('Error with input <' + match + '>.  There are only ' + tag.length + ' tag(s) selected');
            }
        } else {
            results.push('');
            errors.push('Error with input <' + match + '>.  There are only ' + tags.length + ' tag groups(s) selected');
        }
    }

};
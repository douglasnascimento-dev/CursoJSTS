"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Option = exports.Votting = exports.VottingApp = void 0;
class VottingApp {
    constructor() {
        this.vottings = [];
    }
    addVoting(votting) {
        this.vottings.push(votting);
    }
    printVottings() {
        for (const votting of this.vottings) {
            votting.printVotting();
            console.log('\n-------------\n');
        }
    }
}
exports.VottingApp = VottingApp;
class Votting {
    constructor(votationName, options) {
        this.votationName = '';
        this.options = [];
        this.votationName = votationName;
        this.options = options;
    }
    printVotting() {
        console.log(this.votationName + '\n');
        for (const option of this.options) {
            console.log('       > ' + option + ': ' + option.viewVotes + '\n');
        }
    }
    addOptions(options) {
        this.options.push(options);
    }
}
exports.Votting = Votting;
class Option {
    constructor(name) {
        this.name = '';
        this.votes = 0;
        this.name = name;
    }
    addVote() {
        this.votes++;
    }
    viewVotes() {
        return this.votes;
    }
}
exports.Option = Option;
const js = new Option('js');
const ts = new Option('ts');
const python = new Option('python');
const ProgLang = new Votting('Qual a melhor linguagem de programação?', [js, ts]);
ProgLang.addOptions(python);
const bestVottingApp = new VottingApp();
bestVottingApp.addVoting(ProgLang);
bestVottingApp.printVottings();

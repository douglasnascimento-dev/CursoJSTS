export class Option {
    public name: string;
    public votes: number = 0;

    constructor(name: string) {
        this.name = name;
    }

    addVote(): void {
        this.votes++;
    }

    viewVotes(): number {
        return this.votes;
    }
}

export class Votting {
    public votationName: string;
    public options: Option[];

    constructor(votationName: string, options: Option[] = []) {
        this.votationName = votationName;
        this.options = options;
    }

    printVotting(): void {
        console.log(this.votationName);
        for (const option of this.options) {
            console.log(`       > ${option.name}: ${option.viewVotes()} votos`);
        }
    }
    addOption(option: Option): void {
        this.options.push(option);
    }
}

export class VottingApp {
    public vottings: Votting[] = [];

    addVoting(votting: Votting): void {
        this.vottings.push(votting);
    }

    printVottings(): void {
        for (const votting of this.vottings) {
            votting.printVotting();
            console.log('\n---------------------------\n');
        }
    }

    vote(votting: Votting, option: Votting.option): void {
        if (votting.options.includes(option)) {
            option.addVote();
        } else {
            console.log(`Erro: A opção "${option.name}" não pertence à votação "${votting.votationName}".`);
        }
    }
}


const progLang = new Votting('Qual a melhor linguagem de programação?', [new Option('ts'), const ts = new Option('ts');]);
progLang.addOption(new Option('python'));

const bestVottingApp = new VottingApp();
bestVottingApp.addVoting(progLang);

bestVottingApp.vote(progLang, js);
bestVottingApp.vote(progLang, js);
bestVottingApp.vote(progLang, ts);

bestVottingApp.printVottings();

export default bestVottingApp;
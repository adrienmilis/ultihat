import { FormController } from '@web/views/form/form_controller';
import { formView } from "@web/views/form/form_view";
import { useService } from "@web/core/utils/hooks";
import { registry } from "@web/core/registry";


export class TeamMakerFormController extends FormController {
    setup() {
        super.setup();
        this.orm = useService("orm");
    }
}

export const TeamMakerFormView = {
    ...formView,
    Controller: TeamMakerFormController,
};

registry.category("views").add("team_maker", TeamMakerFormView);

// Helper: variance calculation
// function variance(arr) {
//   const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
//   return arr.reduce((sum, val) => sum + (val - mean) ** 2, 0) / arr.length;
// }

// function safeVariance(arr) {
//   const unique = new Set(arr);
//   return unique.size > 1 ? variance(arr) : 0;
// }

// // Evaluate how balanced the teams are
// function evaluateTeams(teams) {
//   const avgLevels = teams.map(team =>
//     team.reduce((sum, p) => sum + p.level, 0) / team.length
//   );

//   const handlerCounts = teams.map(team =>
//     team.filter(p => p.role === 'H').length
//   );

//   const femaleCounts = teams.map(team =>
//     team.filter(p => p.gender === 'F').length
//   );

//   const score =
//     safeVariance(avgLevels) +
//     0.5 * safeVariance(handlerCounts) +
//     0.5 * safeVariance(femaleCounts);

//   return score;
// }

// Main function to create balanced teams
// function makeTeams(players, nTeams, playersPerTeam, maxIterations=10000) {
//   let bestScore = Infinity;
//   let bestTeams = null;

//   for (let i = 0; i < maxIterations; i++) {
//     const shuffled = [...players].sort(() => Math.random() - 0.5);
//     const teams = Array.from({ length: nTeams }, () => []);
//     let teamIndex = 0;

//     for (const player of shuffled) {
//       teams[teamIndex].push(player);
//       teamIndex = (teamIndex + 1) % nTeams;
//     }

//     const score = evaluateTeams(teams);
//     if (score < bestScore) {
//       bestScore = score;
//       bestTeams = teams;
//     }
//   }

//   console.log("Best score:", bestScore);
//   return bestTeams;
// }

// bestTeams = makeTeams(PLAYERS, 4, 7);
// for (const team of bestTeams) {
//     console.log(team);
// }
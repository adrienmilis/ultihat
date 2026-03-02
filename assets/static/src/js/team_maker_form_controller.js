import { FormController } from '@web/views/form/form_controller';
import { formView } from "@web/views/form/form_view";
import { useService } from "@web/core/utils/hooks";


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

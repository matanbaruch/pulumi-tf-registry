// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AutomationVariableDatetime extends pulumi.CustomResource {
    /**
     * Get an existing AutomationVariableDatetime resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AutomationVariableDatetimeState, opts?: pulumi.CustomResourceOptions): AutomationVariableDatetime {
        return new AutomationVariableDatetime(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/automationVariableDatetime:AutomationVariableDatetime';

    /**
     * Returns true if the given object is an instance of AutomationVariableDatetime.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AutomationVariableDatetime {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AutomationVariableDatetime.__pulumiType;
    }

    public readonly automationAccountName!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly encrypted!: pulumi.Output<boolean | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.AutomationVariableDatetimeTimeouts | undefined>;
    public readonly value!: pulumi.Output<string | undefined>;

    /**
     * Create a AutomationVariableDatetime resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AutomationVariableDatetimeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AutomationVariableDatetimeArgs | AutomationVariableDatetimeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AutomationVariableDatetimeState | undefined;
            resourceInputs["automationAccountName"] = state ? state.automationAccountName : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["encrypted"] = state ? state.encrypted : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["value"] = state ? state.value : undefined;
        } else {
            const args = argsOrState as AutomationVariableDatetimeArgs | undefined;
            if ((!args || args.automationAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'automationAccountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["automationAccountName"] = args ? args.automationAccountName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["encrypted"] = args ? args.encrypted : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AutomationVariableDatetime.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AutomationVariableDatetime resources.
 */
export interface AutomationVariableDatetimeState {
    automationAccountName?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    encrypted?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AutomationVariableDatetimeTimeouts>;
    value?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AutomationVariableDatetime resource.
 */
export interface AutomationVariableDatetimeArgs {
    automationAccountName: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    encrypted?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AutomationVariableDatetimeTimeouts>;
    value?: pulumi.Input<string>;
}

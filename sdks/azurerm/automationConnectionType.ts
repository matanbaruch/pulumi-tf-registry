// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AutomationConnectionType extends pulumi.CustomResource {
    /**
     * Get an existing AutomationConnectionType resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AutomationConnectionTypeState, opts?: pulumi.CustomResourceOptions): AutomationConnectionType {
        return new AutomationConnectionType(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/automationConnectionType:AutomationConnectionType';

    /**
     * Returns true if the given object is an instance of AutomationConnectionType.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AutomationConnectionType {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AutomationConnectionType.__pulumiType;
    }

    public readonly automationAccountName!: pulumi.Output<string>;
    public readonly fields!: pulumi.Output<outputs.AutomationConnectionTypeField[]>;
    public readonly isGlobal!: pulumi.Output<boolean | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.AutomationConnectionTypeTimeouts | undefined>;

    /**
     * Create a AutomationConnectionType resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AutomationConnectionTypeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AutomationConnectionTypeArgs | AutomationConnectionTypeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AutomationConnectionTypeState | undefined;
            resourceInputs["automationAccountName"] = state ? state.automationAccountName : undefined;
            resourceInputs["fields"] = state ? state.fields : undefined;
            resourceInputs["isGlobal"] = state ? state.isGlobal : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as AutomationConnectionTypeArgs | undefined;
            if ((!args || args.automationAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'automationAccountName'");
            }
            if ((!args || args.fields === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fields'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["automationAccountName"] = args ? args.automationAccountName : undefined;
            resourceInputs["fields"] = args ? args.fields : undefined;
            resourceInputs["isGlobal"] = args ? args.isGlobal : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AutomationConnectionType.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AutomationConnectionType resources.
 */
export interface AutomationConnectionTypeState {
    automationAccountName?: pulumi.Input<string>;
    fields?: pulumi.Input<pulumi.Input<inputs.AutomationConnectionTypeField>[]>;
    isGlobal?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AutomationConnectionTypeTimeouts>;
}

/**
 * The set of arguments for constructing a AutomationConnectionType resource.
 */
export interface AutomationConnectionTypeArgs {
    automationAccountName: pulumi.Input<string>;
    fields: pulumi.Input<pulumi.Input<inputs.AutomationConnectionTypeField>[]>;
    isGlobal?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AutomationConnectionTypeTimeouts>;
}

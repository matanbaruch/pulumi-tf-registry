// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Alertemailconfig extends pulumi.CustomResource {
    /**
     * Get an existing Alertemailconfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AlertemailconfigState, opts?: pulumi.CustomResourceOptions): Alertemailconfig {
        return new Alertemailconfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'avi:index/alertemailconfig:Alertemailconfig';

    /**
     * Returns true if the given object is an instance of Alertemailconfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Alertemailconfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Alertemailconfig.__pulumiType;
    }

    public readonly ccEmails!: pulumi.Output<string>;
    public readonly configpbAttributes!: pulumi.Output<outputs.AlertemailconfigConfigpbAttribute[] | undefined>;
    public readonly description!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly tenantRef!: pulumi.Output<string>;
    public readonly toEmails!: pulumi.Output<string>;
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a Alertemailconfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AlertemailconfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AlertemailconfigArgs | AlertemailconfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AlertemailconfigState | undefined;
            resourceInputs["ccEmails"] = state ? state.ccEmails : undefined;
            resourceInputs["configpbAttributes"] = state ? state.configpbAttributes : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tenantRef"] = state ? state.tenantRef : undefined;
            resourceInputs["toEmails"] = state ? state.toEmails : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as AlertemailconfigArgs | undefined;
            if ((!args || args.toEmails === undefined) && !opts.urn) {
                throw new Error("Missing required property 'toEmails'");
            }
            resourceInputs["ccEmails"] = args ? args.ccEmails : undefined;
            resourceInputs["configpbAttributes"] = args ? args.configpbAttributes : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tenantRef"] = args ? args.tenantRef : undefined;
            resourceInputs["toEmails"] = args ? args.toEmails : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Alertemailconfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Alertemailconfig resources.
 */
export interface AlertemailconfigState {
    ccEmails?: pulumi.Input<string>;
    configpbAttributes?: pulumi.Input<pulumi.Input<inputs.AlertemailconfigConfigpbAttribute>[]>;
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tenantRef?: pulumi.Input<string>;
    toEmails?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Alertemailconfig resource.
 */
export interface AlertemailconfigArgs {
    ccEmails?: pulumi.Input<string>;
    configpbAttributes?: pulumi.Input<pulumi.Input<inputs.AlertemailconfigConfigpbAttribute>[]>;
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tenantRef?: pulumi.Input<string>;
    toEmails: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}

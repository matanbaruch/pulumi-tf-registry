// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PagerdutyIntegration extends pulumi.CustomResource {
    /**
     * Get an existing PagerdutyIntegration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PagerdutyIntegrationState, opts?: pulumi.CustomResourceOptions): PagerdutyIntegration {
        return new PagerdutyIntegration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'better-uptime:index/pagerdutyIntegration:PagerdutyIntegration';

    /**
     * Returns true if the given object is an instance of PagerdutyIntegration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PagerdutyIntegration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PagerdutyIntegration.__pulumiType;
    }

    /**
     * The PagerDuty routing key.
     */
    public readonly key!: pulumi.Output<string>;
    /**
     * The name of the PagerDuty Integration.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Used to specify the team the resource should be created in when using global tokens.
     */
    public readonly teamName!: pulumi.Output<string | undefined>;

    /**
     * Create a PagerdutyIntegration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PagerdutyIntegrationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PagerdutyIntegrationArgs | PagerdutyIntegrationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PagerdutyIntegrationState | undefined;
            resourceInputs["key"] = state ? state.key : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["teamName"] = state ? state.teamName : undefined;
        } else {
            const args = argsOrState as PagerdutyIntegrationArgs | undefined;
            if ((!args || args.key === undefined) && !opts.urn) {
                throw new Error("Missing required property 'key'");
            }
            resourceInputs["key"] = args ? args.key : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["teamName"] = args ? args.teamName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PagerdutyIntegration.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PagerdutyIntegration resources.
 */
export interface PagerdutyIntegrationState {
    /**
     * The PagerDuty routing key.
     */
    key?: pulumi.Input<string>;
    /**
     * The name of the PagerDuty Integration.
     */
    name?: pulumi.Input<string>;
    /**
     * Used to specify the team the resource should be created in when using global tokens.
     */
    teamName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PagerdutyIntegration resource.
 */
export interface PagerdutyIntegrationArgs {
    /**
     * The PagerDuty routing key.
     */
    key: pulumi.Input<string>;
    /**
     * The name of the PagerDuty Integration.
     */
    name?: pulumi.Input<string>;
    /**
     * Used to specify the team the resource should be created in when using global tokens.
     */
    teamName?: pulumi.Input<string>;
}

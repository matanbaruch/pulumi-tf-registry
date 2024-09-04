// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EdrIntegration extends pulumi.CustomResource {
    /**
     * Get an existing EdrIntegration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EdrIntegrationState, opts?: pulumi.CustomResourceOptions): EdrIntegration {
        return new EdrIntegration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'prosimo:index/edrIntegration:EdrIntegration';

    /**
     * Returns true if the given object is an instance of EdrIntegration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EdrIntegration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EdrIntegration.__pulumiType;
    }

    public readonly crowdstrikes!: pulumi.Output<outputs.EdrIntegrationCrowdstrike[]>;

    /**
     * Create a EdrIntegration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EdrIntegrationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EdrIntegrationArgs | EdrIntegrationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EdrIntegrationState | undefined;
            resourceInputs["crowdstrikes"] = state ? state.crowdstrikes : undefined;
        } else {
            const args = argsOrState as EdrIntegrationArgs | undefined;
            if ((!args || args.crowdstrikes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'crowdstrikes'");
            }
            resourceInputs["crowdstrikes"] = args ? args.crowdstrikes : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EdrIntegration.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EdrIntegration resources.
 */
export interface EdrIntegrationState {
    crowdstrikes?: pulumi.Input<pulumi.Input<inputs.EdrIntegrationCrowdstrike>[]>;
}

/**
 * The set of arguments for constructing a EdrIntegration resource.
 */
export interface EdrIntegrationArgs {
    crowdstrikes: pulumi.Input<pulumi.Input<inputs.EdrIntegrationCrowdstrike>[]>;
}

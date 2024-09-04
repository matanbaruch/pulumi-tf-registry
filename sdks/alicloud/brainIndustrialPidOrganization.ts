// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class BrainIndustrialPidOrganization extends pulumi.CustomResource {
    /**
     * Get an existing BrainIndustrialPidOrganization resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BrainIndustrialPidOrganizationState, opts?: pulumi.CustomResourceOptions): BrainIndustrialPidOrganization {
        return new BrainIndustrialPidOrganization(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/brainIndustrialPidOrganization:BrainIndustrialPidOrganization';

    /**
     * Returns true if the given object is an instance of BrainIndustrialPidOrganization.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BrainIndustrialPidOrganization {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BrainIndustrialPidOrganization.__pulumiType;
    }

    public readonly parentPidOrganizationId!: pulumi.Output<string | undefined>;
    public readonly pidOrganizationName!: pulumi.Output<string>;

    /**
     * Create a BrainIndustrialPidOrganization resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BrainIndustrialPidOrganizationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BrainIndustrialPidOrganizationArgs | BrainIndustrialPidOrganizationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BrainIndustrialPidOrganizationState | undefined;
            resourceInputs["parentPidOrganizationId"] = state ? state.parentPidOrganizationId : undefined;
            resourceInputs["pidOrganizationName"] = state ? state.pidOrganizationName : undefined;
        } else {
            const args = argsOrState as BrainIndustrialPidOrganizationArgs | undefined;
            if ((!args || args.pidOrganizationName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'pidOrganizationName'");
            }
            resourceInputs["parentPidOrganizationId"] = args ? args.parentPidOrganizationId : undefined;
            resourceInputs["pidOrganizationName"] = args ? args.pidOrganizationName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BrainIndustrialPidOrganization.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BrainIndustrialPidOrganization resources.
 */
export interface BrainIndustrialPidOrganizationState {
    parentPidOrganizationId?: pulumi.Input<string>;
    pidOrganizationName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a BrainIndustrialPidOrganization resource.
 */
export interface BrainIndustrialPidOrganizationArgs {
    parentPidOrganizationId?: pulumi.Input<string>;
    pidOrganizationName: pulumi.Input<string>;
}

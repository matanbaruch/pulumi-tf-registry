// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ComputeIpAssociation extends pulumi.CustomResource {
    /**
     * Get an existing ComputeIpAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputeIpAssociationState, opts?: pulumi.CustomResourceOptions): ComputeIpAssociation {
        return new ComputeIpAssociation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'opc:index/computeIpAssociation:ComputeIpAssociation';

    /**
     * Returns true if the given object is an instance of ComputeIpAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputeIpAssociation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputeIpAssociation.__pulumiType;
    }

    public readonly name!: pulumi.Output<string>;
    public readonly parentPool!: pulumi.Output<string>;
    public readonly vcable!: pulumi.Output<string>;

    /**
     * Create a ComputeIpAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComputeIpAssociationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComputeIpAssociationArgs | ComputeIpAssociationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComputeIpAssociationState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["parentPool"] = state ? state.parentPool : undefined;
            resourceInputs["vcable"] = state ? state.vcable : undefined;
        } else {
            const args = argsOrState as ComputeIpAssociationArgs | undefined;
            if ((!args || args.parentPool === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parentPool'");
            }
            if ((!args || args.vcable === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vcable'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["parentPool"] = args ? args.parentPool : undefined;
            resourceInputs["vcable"] = args ? args.vcable : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ComputeIpAssociation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComputeIpAssociation resources.
 */
export interface ComputeIpAssociationState {
    name?: pulumi.Input<string>;
    parentPool?: pulumi.Input<string>;
    vcable?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ComputeIpAssociation resource.
 */
export interface ComputeIpAssociationArgs {
    name?: pulumi.Input<string>;
    parentPool: pulumi.Input<string>;
    vcable: pulumi.Input<string>;
}

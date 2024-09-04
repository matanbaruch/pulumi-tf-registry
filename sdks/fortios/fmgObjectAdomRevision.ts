// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class FmgObjectAdomRevision extends pulumi.CustomResource {
    /**
     * Get an existing FmgObjectAdomRevision resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FmgObjectAdomRevisionState, opts?: pulumi.CustomResourceOptions): FmgObjectAdomRevision {
        return new FmgObjectAdomRevision(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/fmgObjectAdomRevision:FmgObjectAdomRevision';

    /**
     * Returns true if the given object is an instance of FmgObjectAdomRevision.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FmgObjectAdomRevision {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FmgObjectAdomRevision.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly createdBy!: pulumi.Output<string | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly locked!: pulumi.Output<number | undefined>;
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a FmgObjectAdomRevision resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: FmgObjectAdomRevisionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FmgObjectAdomRevisionArgs | FmgObjectAdomRevisionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FmgObjectAdomRevisionState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["createdBy"] = state ? state.createdBy : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["locked"] = state ? state.locked : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as FmgObjectAdomRevisionArgs | undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["createdBy"] = args ? args.createdBy : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["locked"] = args ? args.locked : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FmgObjectAdomRevision.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FmgObjectAdomRevision resources.
 */
export interface FmgObjectAdomRevisionState {
    adom?: pulumi.Input<string>;
    createdBy?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    locked?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FmgObjectAdomRevision resource.
 */
export interface FmgObjectAdomRevisionArgs {
    adom?: pulumi.Input<string>;
    createdBy?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    locked?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
}

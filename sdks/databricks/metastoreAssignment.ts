// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MetastoreAssignment extends pulumi.CustomResource {
    /**
     * Get an existing MetastoreAssignment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MetastoreAssignmentState, opts?: pulumi.CustomResourceOptions): MetastoreAssignment {
        return new MetastoreAssignment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'databricks:index/metastoreAssignment:MetastoreAssignment';

    /**
     * Returns true if the given object is an instance of MetastoreAssignment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MetastoreAssignment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MetastoreAssignment.__pulumiType;
    }

    public readonly defaultCatalogName!: pulumi.Output<string | undefined>;
    public readonly metastoreId!: pulumi.Output<string>;
    public readonly workspaceId!: pulumi.Output<number>;

    /**
     * Create a MetastoreAssignment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MetastoreAssignmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MetastoreAssignmentArgs | MetastoreAssignmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MetastoreAssignmentState | undefined;
            resourceInputs["defaultCatalogName"] = state ? state.defaultCatalogName : undefined;
            resourceInputs["metastoreId"] = state ? state.metastoreId : undefined;
            resourceInputs["workspaceId"] = state ? state.workspaceId : undefined;
        } else {
            const args = argsOrState as MetastoreAssignmentArgs | undefined;
            if ((!args || args.metastoreId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'metastoreId'");
            }
            if ((!args || args.workspaceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceId'");
            }
            resourceInputs["defaultCatalogName"] = args ? args.defaultCatalogName : undefined;
            resourceInputs["metastoreId"] = args ? args.metastoreId : undefined;
            resourceInputs["workspaceId"] = args ? args.workspaceId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MetastoreAssignment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MetastoreAssignment resources.
 */
export interface MetastoreAssignmentState {
    defaultCatalogName?: pulumi.Input<string>;
    metastoreId?: pulumi.Input<string>;
    workspaceId?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a MetastoreAssignment resource.
 */
export interface MetastoreAssignmentArgs {
    defaultCatalogName?: pulumi.Input<string>;
    metastoreId: pulumi.Input<string>;
    workspaceId: pulumi.Input<number>;
}

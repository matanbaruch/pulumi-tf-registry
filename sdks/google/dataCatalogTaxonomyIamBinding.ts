// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DataCatalogTaxonomyIamBinding extends pulumi.CustomResource {
    /**
     * Get an existing DataCatalogTaxonomyIamBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DataCatalogTaxonomyIamBindingState, opts?: pulumi.CustomResourceOptions): DataCatalogTaxonomyIamBinding {
        return new DataCatalogTaxonomyIamBinding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/dataCatalogTaxonomyIamBinding:DataCatalogTaxonomyIamBinding';

    /**
     * Returns true if the given object is an instance of DataCatalogTaxonomyIamBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataCatalogTaxonomyIamBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataCatalogTaxonomyIamBinding.__pulumiType;
    }

    public readonly condition!: pulumi.Output<outputs.DataCatalogTaxonomyIamBindingCondition | undefined>;
    public /*out*/ readonly etag!: pulumi.Output<string>;
    public readonly members!: pulumi.Output<string[]>;
    public readonly project!: pulumi.Output<string>;
    public readonly region!: pulumi.Output<string>;
    public readonly role!: pulumi.Output<string>;
    public readonly taxonomy!: pulumi.Output<string>;

    /**
     * Create a DataCatalogTaxonomyIamBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataCatalogTaxonomyIamBindingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DataCatalogTaxonomyIamBindingArgs | DataCatalogTaxonomyIamBindingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DataCatalogTaxonomyIamBindingState | undefined;
            resourceInputs["condition"] = state ? state.condition : undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["members"] = state ? state.members : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
            resourceInputs["taxonomy"] = state ? state.taxonomy : undefined;
        } else {
            const args = argsOrState as DataCatalogTaxonomyIamBindingArgs | undefined;
            if ((!args || args.members === undefined) && !opts.urn) {
                throw new Error("Missing required property 'members'");
            }
            if ((!args || args.role === undefined) && !opts.urn) {
                throw new Error("Missing required property 'role'");
            }
            if ((!args || args.taxonomy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'taxonomy'");
            }
            resourceInputs["condition"] = args ? args.condition : undefined;
            resourceInputs["members"] = args ? args.members : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["taxonomy"] = args ? args.taxonomy : undefined;
            resourceInputs["etag"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DataCatalogTaxonomyIamBinding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DataCatalogTaxonomyIamBinding resources.
 */
export interface DataCatalogTaxonomyIamBindingState {
    condition?: pulumi.Input<inputs.DataCatalogTaxonomyIamBindingCondition>;
    etag?: pulumi.Input<string>;
    members?: pulumi.Input<pulumi.Input<string>[]>;
    project?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    role?: pulumi.Input<string>;
    taxonomy?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DataCatalogTaxonomyIamBinding resource.
 */
export interface DataCatalogTaxonomyIamBindingArgs {
    condition?: pulumi.Input<inputs.DataCatalogTaxonomyIamBindingCondition>;
    members: pulumi.Input<pulumi.Input<string>[]>;
    project?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    role: pulumi.Input<string>;
    taxonomy: pulumi.Input<string>;
}

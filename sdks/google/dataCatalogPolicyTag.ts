// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DataCatalogPolicyTag extends pulumi.CustomResource {
    /**
     * Get an existing DataCatalogPolicyTag resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DataCatalogPolicyTagState, opts?: pulumi.CustomResourceOptions): DataCatalogPolicyTag {
        return new DataCatalogPolicyTag(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/dataCatalogPolicyTag:DataCatalogPolicyTag';

    /**
     * Returns true if the given object is an instance of DataCatalogPolicyTag.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DataCatalogPolicyTag {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DataCatalogPolicyTag.__pulumiType;
    }

    /**
     * Resource names of child policy tags of this policy tag.
     */
    public /*out*/ readonly childPolicyTags!: pulumi.Output<string[]>;
    /**
     * Description of this policy tag. It must: contain only unicode characters, tabs, newlines, carriage returns and page
     * breaks; and be at most 2000 bytes long when encoded in UTF-8. If not set, defaults to an empty description. If not set,
     * defaults to an empty description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * User defined name of this policy tag. It must: be unique within the parent taxonomy; contain only unicode letters,
     * numbers, underscores, dashes and spaces; not start or end with spaces; and be at most 200 bytes long when encoded in
     * UTF-8.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Resource name of this policy tag, whose format is:
     * "projects/{project}/locations/{region}/taxonomies/{taxonomy}/policyTags/{policytag}"
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource name of this policy tag's parent policy tag. If empty, it means this policy tag is a top level policy tag. If
     * not set, defaults to an empty string.
     */
    public readonly parentPolicyTag!: pulumi.Output<string | undefined>;
    /**
     * Taxonomy the policy tag is associated with
     */
    public readonly taxonomy!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.DataCatalogPolicyTagTimeouts | undefined>;

    /**
     * Create a DataCatalogPolicyTag resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DataCatalogPolicyTagArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DataCatalogPolicyTagArgs | DataCatalogPolicyTagState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DataCatalogPolicyTagState | undefined;
            resourceInputs["childPolicyTags"] = state ? state.childPolicyTags : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["parentPolicyTag"] = state ? state.parentPolicyTag : undefined;
            resourceInputs["taxonomy"] = state ? state.taxonomy : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as DataCatalogPolicyTagArgs | undefined;
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.taxonomy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'taxonomy'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["parentPolicyTag"] = args ? args.parentPolicyTag : undefined;
            resourceInputs["taxonomy"] = args ? args.taxonomy : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["childPolicyTags"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DataCatalogPolicyTag.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DataCatalogPolicyTag resources.
 */
export interface DataCatalogPolicyTagState {
    /**
     * Resource names of child policy tags of this policy tag.
     */
    childPolicyTags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Description of this policy tag. It must: contain only unicode characters, tabs, newlines, carriage returns and page
     * breaks; and be at most 2000 bytes long when encoded in UTF-8. If not set, defaults to an empty description. If not set,
     * defaults to an empty description.
     */
    description?: pulumi.Input<string>;
    /**
     * User defined name of this policy tag. It must: be unique within the parent taxonomy; contain only unicode letters,
     * numbers, underscores, dashes and spaces; not start or end with spaces; and be at most 200 bytes long when encoded in
     * UTF-8.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Resource name of this policy tag, whose format is:
     * "projects/{project}/locations/{region}/taxonomies/{taxonomy}/policyTags/{policytag}"
     */
    name?: pulumi.Input<string>;
    /**
     * Resource name of this policy tag's parent policy tag. If empty, it means this policy tag is a top level policy tag. If
     * not set, defaults to an empty string.
     */
    parentPolicyTag?: pulumi.Input<string>;
    /**
     * Taxonomy the policy tag is associated with
     */
    taxonomy?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DataCatalogPolicyTagTimeouts>;
}

/**
 * The set of arguments for constructing a DataCatalogPolicyTag resource.
 */
export interface DataCatalogPolicyTagArgs {
    /**
     * Description of this policy tag. It must: contain only unicode characters, tabs, newlines, carriage returns and page
     * breaks; and be at most 2000 bytes long when encoded in UTF-8. If not set, defaults to an empty description. If not set,
     * defaults to an empty description.
     */
    description?: pulumi.Input<string>;
    /**
     * User defined name of this policy tag. It must: be unique within the parent taxonomy; contain only unicode letters,
     * numbers, underscores, dashes and spaces; not start or end with spaces; and be at most 200 bytes long when encoded in
     * UTF-8.
     */
    displayName: pulumi.Input<string>;
    /**
     * Resource name of this policy tag's parent policy tag. If empty, it means this policy tag is a top level policy tag. If
     * not set, defaults to an empty string.
     */
    parentPolicyTag?: pulumi.Input<string>;
    /**
     * Taxonomy the policy tag is associated with
     */
    taxonomy: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DataCatalogPolicyTagTimeouts>;
}

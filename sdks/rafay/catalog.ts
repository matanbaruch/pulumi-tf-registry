// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Catalog extends pulumi.CustomResource {
    /**
     * Get an existing Catalog resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CatalogState, opts?: pulumi.CustomResourceOptions): Catalog {
        return new Catalog(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'rafay:index/catalog:Catalog';

    /**
     * Returns true if the given object is an instance of Catalog.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Catalog {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Catalog.__pulumiType;
    }

    /**
     * Metadata of the catalog resource
     */
    public readonly metadata!: pulumi.Output<outputs.CatalogMetadata | undefined>;
    /**
     * Specification of the catalog resource
     */
    public readonly spec!: pulumi.Output<outputs.CatalogSpec | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.CatalogTimeouts | undefined>;

    /**
     * Create a Catalog resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CatalogArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CatalogArgs | CatalogState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CatalogState | undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["spec"] = state ? state.spec : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as CatalogArgs | undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["spec"] = args ? args.spec : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Catalog.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Catalog resources.
 */
export interface CatalogState {
    /**
     * Metadata of the catalog resource
     */
    metadata?: pulumi.Input<inputs.CatalogMetadata>;
    /**
     * Specification of the catalog resource
     */
    spec?: pulumi.Input<inputs.CatalogSpec>;
    timeouts?: pulumi.Input<inputs.CatalogTimeouts>;
}

/**
 * The set of arguments for constructing a Catalog resource.
 */
export interface CatalogArgs {
    /**
     * Metadata of the catalog resource
     */
    metadata?: pulumi.Input<inputs.CatalogMetadata>;
    /**
     * Specification of the catalog resource
     */
    spec?: pulumi.Input<inputs.CatalogSpec>;
    timeouts?: pulumi.Input<inputs.CatalogTimeouts>;
}

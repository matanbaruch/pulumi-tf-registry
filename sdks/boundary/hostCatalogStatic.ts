// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class HostCatalogStatic extends pulumi.CustomResource {
    /**
     * Get an existing HostCatalogStatic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HostCatalogStaticState, opts?: pulumi.CustomResourceOptions): HostCatalogStatic {
        return new HostCatalogStatic(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'boundary:index/hostCatalogStatic:HostCatalogStatic';

    /**
     * Returns true if the given object is an instance of HostCatalogStatic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HostCatalogStatic {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HostCatalogStatic.__pulumiType;
    }

    /**
     * The host catalog description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The host catalog name. Defaults to the resource name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The scope ID in which the resource is created.
     */
    public readonly scopeId!: pulumi.Output<string>;

    /**
     * Create a HostCatalogStatic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HostCatalogStaticArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: HostCatalogStaticArgs | HostCatalogStaticState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as HostCatalogStaticState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["scopeId"] = state ? state.scopeId : undefined;
        } else {
            const args = argsOrState as HostCatalogStaticArgs | undefined;
            if ((!args || args.scopeId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scopeId'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["scopeId"] = args ? args.scopeId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(HostCatalogStatic.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering HostCatalogStatic resources.
 */
export interface HostCatalogStaticState {
    /**
     * The host catalog description.
     */
    description?: pulumi.Input<string>;
    /**
     * The host catalog name. Defaults to the resource name.
     */
    name?: pulumi.Input<string>;
    /**
     * The scope ID in which the resource is created.
     */
    scopeId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a HostCatalogStatic resource.
 */
export interface HostCatalogStaticArgs {
    /**
     * The host catalog description.
     */
    description?: pulumi.Input<string>;
    /**
     * The host catalog name. Defaults to the resource name.
     */
    name?: pulumi.Input<string>;
    /**
     * The scope ID in which the resource is created.
     */
    scopeId: pulumi.Input<string>;
}

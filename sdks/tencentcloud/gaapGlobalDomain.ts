// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class GaapGlobalDomain extends pulumi.CustomResource {
    /**
     * Get an existing GaapGlobalDomain resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GaapGlobalDomainState, opts?: pulumi.CustomResourceOptions): GaapGlobalDomain {
        return new GaapGlobalDomain(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/gaapGlobalDomain:GaapGlobalDomain';

    /**
     * Returns true if the given object is an instance of GaapGlobalDomain.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GaapGlobalDomain {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GaapGlobalDomain.__pulumiType;
    }

    /**
     * alias.
     */
    public readonly alias!: pulumi.Output<string | undefined>;
    /**
     * Domain name default entry.
     */
    public readonly defaultValue!: pulumi.Output<string>;
    /**
     * Domain Name Project ID.
     */
    public readonly projectId!: pulumi.Output<number>;
    /**
     * Global domain statue. Available values: open and close, default is open.
     */
    public readonly status!: pulumi.Output<string>;
    /**
     * Instance tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;

    /**
     * Create a GaapGlobalDomain resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GaapGlobalDomainArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GaapGlobalDomainArgs | GaapGlobalDomainState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GaapGlobalDomainState | undefined;
            resourceInputs["alias"] = state ? state.alias : undefined;
            resourceInputs["defaultValue"] = state ? state.defaultValue : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as GaapGlobalDomainArgs | undefined;
            if ((!args || args.defaultValue === undefined) && !opts.urn) {
                throw new Error("Missing required property 'defaultValue'");
            }
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            resourceInputs["alias"] = args ? args.alias : undefined;
            resourceInputs["defaultValue"] = args ? args.defaultValue : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GaapGlobalDomain.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GaapGlobalDomain resources.
 */
export interface GaapGlobalDomainState {
    /**
     * alias.
     */
    alias?: pulumi.Input<string>;
    /**
     * Domain name default entry.
     */
    defaultValue?: pulumi.Input<string>;
    /**
     * Domain Name Project ID.
     */
    projectId?: pulumi.Input<number>;
    /**
     * Global domain statue. Available values: open and close, default is open.
     */
    status?: pulumi.Input<string>;
    /**
     * Instance tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a GaapGlobalDomain resource.
 */
export interface GaapGlobalDomainArgs {
    /**
     * alias.
     */
    alias?: pulumi.Input<string>;
    /**
     * Domain name default entry.
     */
    defaultValue: pulumi.Input<string>;
    /**
     * Domain Name Project ID.
     */
    projectId: pulumi.Input<number>;
    /**
     * Global domain statue. Available values: open and close, default is open.
     */
    status?: pulumi.Input<string>;
    /**
     * Instance tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

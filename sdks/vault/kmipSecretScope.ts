// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class KmipSecretScope extends pulumi.CustomResource {
    /**
     * Get an existing KmipSecretScope resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KmipSecretScopeState, opts?: pulumi.CustomResourceOptions): KmipSecretScope {
        return new KmipSecretScope(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vault:index/kmipSecretScope:KmipSecretScope';

    /**
     * Returns true if the given object is an instance of KmipSecretScope.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is KmipSecretScope {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === KmipSecretScope.__pulumiType;
    }

    /**
     * Force deletion even if there are managed objects in the scope
     */
    public readonly force!: pulumi.Output<boolean | undefined>;
    /**
     * Target namespace. (requires Enterprise)
     */
    public readonly namespace!: pulumi.Output<string | undefined>;
    /**
     * Path where KMIP backend is mounted
     */
    public readonly path!: pulumi.Output<string>;
    /**
     * Name of the scope
     */
    public readonly scope!: pulumi.Output<string>;

    /**
     * Create a KmipSecretScope resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KmipSecretScopeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KmipSecretScopeArgs | KmipSecretScopeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as KmipSecretScopeState | undefined;
            resourceInputs["force"] = state ? state.force : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["path"] = state ? state.path : undefined;
            resourceInputs["scope"] = state ? state.scope : undefined;
        } else {
            const args = argsOrState as KmipSecretScopeArgs | undefined;
            if ((!args || args.path === undefined) && !opts.urn) {
                throw new Error("Missing required property 'path'");
            }
            if ((!args || args.scope === undefined) && !opts.urn) {
                throw new Error("Missing required property 'scope'");
            }
            resourceInputs["force"] = args ? args.force : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["path"] = args ? args.path : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(KmipSecretScope.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering KmipSecretScope resources.
 */
export interface KmipSecretScopeState {
    /**
     * Force deletion even if there are managed objects in the scope
     */
    force?: pulumi.Input<boolean>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
    /**
     * Path where KMIP backend is mounted
     */
    path?: pulumi.Input<string>;
    /**
     * Name of the scope
     */
    scope?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a KmipSecretScope resource.
 */
export interface KmipSecretScopeArgs {
    /**
     * Force deletion even if there are managed objects in the scope
     */
    force?: pulumi.Input<boolean>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
    /**
     * Path where KMIP backend is mounted
     */
    path: pulumi.Input<string>;
    /**
     * Name of the scope
     */
    scope: pulumi.Input<string>;
}

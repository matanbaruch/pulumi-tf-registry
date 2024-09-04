// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PkiSecretBackendConfigCluster extends pulumi.CustomResource {
    /**
     * Get an existing PkiSecretBackendConfigCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PkiSecretBackendConfigClusterState, opts?: pulumi.CustomResourceOptions): PkiSecretBackendConfigCluster {
        return new PkiSecretBackendConfigCluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vault:index/pkiSecretBackendConfigCluster:PkiSecretBackendConfigCluster';

    /**
     * Returns true if the given object is an instance of PkiSecretBackendConfigCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PkiSecretBackendConfigCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PkiSecretBackendConfigCluster.__pulumiType;
    }

    /**
     * Path to the cluster's AIA distribution point.
     */
    public readonly aiaPath!: pulumi.Output<string | undefined>;
    /**
     * Full path where PKI backend is mounted.
     */
    public readonly backend!: pulumi.Output<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    public readonly namespace!: pulumi.Output<string | undefined>;
    /**
     * Path to the cluster's API mount path.
     */
    public readonly path!: pulumi.Output<string | undefined>;

    /**
     * Create a PkiSecretBackendConfigCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PkiSecretBackendConfigClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PkiSecretBackendConfigClusterArgs | PkiSecretBackendConfigClusterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PkiSecretBackendConfigClusterState | undefined;
            resourceInputs["aiaPath"] = state ? state.aiaPath : undefined;
            resourceInputs["backend"] = state ? state.backend : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["path"] = state ? state.path : undefined;
        } else {
            const args = argsOrState as PkiSecretBackendConfigClusterArgs | undefined;
            if ((!args || args.backend === undefined) && !opts.urn) {
                throw new Error("Missing required property 'backend'");
            }
            resourceInputs["aiaPath"] = args ? args.aiaPath : undefined;
            resourceInputs["backend"] = args ? args.backend : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["path"] = args ? args.path : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PkiSecretBackendConfigCluster.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PkiSecretBackendConfigCluster resources.
 */
export interface PkiSecretBackendConfigClusterState {
    /**
     * Path to the cluster's AIA distribution point.
     */
    aiaPath?: pulumi.Input<string>;
    /**
     * Full path where PKI backend is mounted.
     */
    backend?: pulumi.Input<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
    /**
     * Path to the cluster's API mount path.
     */
    path?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PkiSecretBackendConfigCluster resource.
 */
export interface PkiSecretBackendConfigClusterArgs {
    /**
     * Path to the cluster's AIA distribution point.
     */
    aiaPath?: pulumi.Input<string>;
    /**
     * Full path where PKI backend is mounted.
     */
    backend: pulumi.Input<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
    /**
     * Path to the cluster's API mount path.
     */
    path?: pulumi.Input<string>;
}

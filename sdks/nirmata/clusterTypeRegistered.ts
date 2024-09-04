// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ClusterTypeRegistered extends pulumi.CustomResource {
    /**
     * Get an existing ClusterTypeRegistered resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClusterTypeRegisteredState, opts?: pulumi.CustomResourceOptions): ClusterTypeRegistered {
        return new ClusterTypeRegistered(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nirmata:index/clusterTypeRegistered:ClusterTypeRegistered';

    /**
     * Returns true if the given object is an instance of ClusterTypeRegistered.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ClusterTypeRegistered {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ClusterTypeRegistered.__pulumiType;
    }

    public readonly addons!: pulumi.Output<outputs.ClusterTypeRegisteredAddon[] | undefined>;
    public readonly cloud!: pulumi.Output<string>;
    public readonly clusterRoles!: pulumi.Output<outputs.ClusterTypeRegisteredClusterRole[] | undefined>;
    public readonly enableIamAuthentication!: pulumi.Output<boolean | undefined>;
    public readonly enableIamAuthorization!: pulumi.Output<boolean | undefined>;
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly systemMetadata!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly vaultAuth!: pulumi.Output<outputs.ClusterTypeRegisteredVaultAuth | undefined>;

    /**
     * Create a ClusterTypeRegistered resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterTypeRegisteredArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClusterTypeRegisteredArgs | ClusterTypeRegisteredState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ClusterTypeRegisteredState | undefined;
            resourceInputs["addons"] = state ? state.addons : undefined;
            resourceInputs["cloud"] = state ? state.cloud : undefined;
            resourceInputs["clusterRoles"] = state ? state.clusterRoles : undefined;
            resourceInputs["enableIamAuthentication"] = state ? state.enableIamAuthentication : undefined;
            resourceInputs["enableIamAuthorization"] = state ? state.enableIamAuthorization : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["systemMetadata"] = state ? state.systemMetadata : undefined;
            resourceInputs["vaultAuth"] = state ? state.vaultAuth : undefined;
        } else {
            const args = argsOrState as ClusterTypeRegisteredArgs | undefined;
            if ((!args || args.cloud === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cloud'");
            }
            resourceInputs["addons"] = args ? args.addons : undefined;
            resourceInputs["cloud"] = args ? args.cloud : undefined;
            resourceInputs["clusterRoles"] = args ? args.clusterRoles : undefined;
            resourceInputs["enableIamAuthentication"] = args ? args.enableIamAuthentication : undefined;
            resourceInputs["enableIamAuthorization"] = args ? args.enableIamAuthorization : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["systemMetadata"] = args ? args.systemMetadata : undefined;
            resourceInputs["vaultAuth"] = args ? args.vaultAuth : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ClusterTypeRegistered.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ClusterTypeRegistered resources.
 */
export interface ClusterTypeRegisteredState {
    addons?: pulumi.Input<pulumi.Input<inputs.ClusterTypeRegisteredAddon>[]>;
    cloud?: pulumi.Input<string>;
    clusterRoles?: pulumi.Input<pulumi.Input<inputs.ClusterTypeRegisteredClusterRole>[]>;
    enableIamAuthentication?: pulumi.Input<boolean>;
    enableIamAuthorization?: pulumi.Input<boolean>;
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name?: pulumi.Input<string>;
    systemMetadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    vaultAuth?: pulumi.Input<inputs.ClusterTypeRegisteredVaultAuth>;
}

/**
 * The set of arguments for constructing a ClusterTypeRegistered resource.
 */
export interface ClusterTypeRegisteredArgs {
    addons?: pulumi.Input<pulumi.Input<inputs.ClusterTypeRegisteredAddon>[]>;
    cloud: pulumi.Input<string>;
    clusterRoles?: pulumi.Input<pulumi.Input<inputs.ClusterTypeRegisteredClusterRole>[]>;
    enableIamAuthentication?: pulumi.Input<boolean>;
    enableIamAuthorization?: pulumi.Input<boolean>;
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name?: pulumi.Input<string>;
    systemMetadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    vaultAuth?: pulumi.Input<inputs.ClusterTypeRegisteredVaultAuth>;
}

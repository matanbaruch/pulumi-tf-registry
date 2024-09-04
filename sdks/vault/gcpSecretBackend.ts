// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class GcpSecretBackend extends pulumi.CustomResource {
    /**
     * Get an existing GcpSecretBackend resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GcpSecretBackendState, opts?: pulumi.CustomResourceOptions): GcpSecretBackend {
        return new GcpSecretBackend(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vault:index/gcpSecretBackend:GcpSecretBackend';

    /**
     * Returns true if the given object is an instance of GcpSecretBackend.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GcpSecretBackend {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GcpSecretBackend.__pulumiType;
    }

    /**
     * Accessor of the created GCP mount.
     */
    public /*out*/ readonly accessor!: pulumi.Output<string>;
    /**
     * JSON-encoded credentials to use to connect to GCP
     */
    public readonly credentials!: pulumi.Output<string | undefined>;
    /**
     * Default lease duration for secrets in seconds
     */
    public readonly defaultLeaseTtlSeconds!: pulumi.Output<number | undefined>;
    /**
     * Human-friendly description of the mount for the backend.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * If set, opts out of mount migration on path updates.
     */
    public readonly disableRemount!: pulumi.Output<boolean | undefined>;
    /**
     * The audience claim value for plugin identity tokens.
     */
    public readonly identityTokenAudience!: pulumi.Output<string | undefined>;
    /**
     * The key to use for signing identity tokens.
     */
    public readonly identityTokenKey!: pulumi.Output<string | undefined>;
    /**
     * The TTL of generated tokens.
     */
    public readonly identityTokenTtl!: pulumi.Output<number | undefined>;
    /**
     * Local mount flag that can be explicitly set to true to enforce local mount in HA environment
     */
    public readonly local!: pulumi.Output<boolean | undefined>;
    /**
     * Maximum possible lease duration for secrets in seconds
     */
    public readonly maxLeaseTtlSeconds!: pulumi.Output<number | undefined>;
    /**
     * Target namespace. (requires Enterprise)
     */
    public readonly namespace!: pulumi.Output<string | undefined>;
    /**
     * Path to mount the backend at.
     */
    public readonly path!: pulumi.Output<string | undefined>;
    /**
     * Service Account to impersonate for plugin workload identity federation.
     */
    public readonly serviceAccountEmail!: pulumi.Output<string | undefined>;

    /**
     * Create a GcpSecretBackend resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: GcpSecretBackendArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GcpSecretBackendArgs | GcpSecretBackendState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GcpSecretBackendState | undefined;
            resourceInputs["accessor"] = state ? state.accessor : undefined;
            resourceInputs["credentials"] = state ? state.credentials : undefined;
            resourceInputs["defaultLeaseTtlSeconds"] = state ? state.defaultLeaseTtlSeconds : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["disableRemount"] = state ? state.disableRemount : undefined;
            resourceInputs["identityTokenAudience"] = state ? state.identityTokenAudience : undefined;
            resourceInputs["identityTokenKey"] = state ? state.identityTokenKey : undefined;
            resourceInputs["identityTokenTtl"] = state ? state.identityTokenTtl : undefined;
            resourceInputs["local"] = state ? state.local : undefined;
            resourceInputs["maxLeaseTtlSeconds"] = state ? state.maxLeaseTtlSeconds : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["path"] = state ? state.path : undefined;
            resourceInputs["serviceAccountEmail"] = state ? state.serviceAccountEmail : undefined;
        } else {
            const args = argsOrState as GcpSecretBackendArgs | undefined;
            resourceInputs["credentials"] = args?.credentials ? pulumi.secret(args.credentials) : undefined;
            resourceInputs["defaultLeaseTtlSeconds"] = args ? args.defaultLeaseTtlSeconds : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["disableRemount"] = args ? args.disableRemount : undefined;
            resourceInputs["identityTokenAudience"] = args ? args.identityTokenAudience : undefined;
            resourceInputs["identityTokenKey"] = args ? args.identityTokenKey : undefined;
            resourceInputs["identityTokenTtl"] = args ? args.identityTokenTtl : undefined;
            resourceInputs["local"] = args ? args.local : undefined;
            resourceInputs["maxLeaseTtlSeconds"] = args ? args.maxLeaseTtlSeconds : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["path"] = args ? args.path : undefined;
            resourceInputs["serviceAccountEmail"] = args ? args.serviceAccountEmail : undefined;
            resourceInputs["accessor"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["credentials"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(GcpSecretBackend.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GcpSecretBackend resources.
 */
export interface GcpSecretBackendState {
    /**
     * Accessor of the created GCP mount.
     */
    accessor?: pulumi.Input<string>;
    /**
     * JSON-encoded credentials to use to connect to GCP
     */
    credentials?: pulumi.Input<string>;
    /**
     * Default lease duration for secrets in seconds
     */
    defaultLeaseTtlSeconds?: pulumi.Input<number>;
    /**
     * Human-friendly description of the mount for the backend.
     */
    description?: pulumi.Input<string>;
    /**
     * If set, opts out of mount migration on path updates.
     */
    disableRemount?: pulumi.Input<boolean>;
    /**
     * The audience claim value for plugin identity tokens.
     */
    identityTokenAudience?: pulumi.Input<string>;
    /**
     * The key to use for signing identity tokens.
     */
    identityTokenKey?: pulumi.Input<string>;
    /**
     * The TTL of generated tokens.
     */
    identityTokenTtl?: pulumi.Input<number>;
    /**
     * Local mount flag that can be explicitly set to true to enforce local mount in HA environment
     */
    local?: pulumi.Input<boolean>;
    /**
     * Maximum possible lease duration for secrets in seconds
     */
    maxLeaseTtlSeconds?: pulumi.Input<number>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
    /**
     * Path to mount the backend at.
     */
    path?: pulumi.Input<string>;
    /**
     * Service Account to impersonate for plugin workload identity federation.
     */
    serviceAccountEmail?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GcpSecretBackend resource.
 */
export interface GcpSecretBackendArgs {
    /**
     * JSON-encoded credentials to use to connect to GCP
     */
    credentials?: pulumi.Input<string>;
    /**
     * Default lease duration for secrets in seconds
     */
    defaultLeaseTtlSeconds?: pulumi.Input<number>;
    /**
     * Human-friendly description of the mount for the backend.
     */
    description?: pulumi.Input<string>;
    /**
     * If set, opts out of mount migration on path updates.
     */
    disableRemount?: pulumi.Input<boolean>;
    /**
     * The audience claim value for plugin identity tokens.
     */
    identityTokenAudience?: pulumi.Input<string>;
    /**
     * The key to use for signing identity tokens.
     */
    identityTokenKey?: pulumi.Input<string>;
    /**
     * The TTL of generated tokens.
     */
    identityTokenTtl?: pulumi.Input<number>;
    /**
     * Local mount flag that can be explicitly set to true to enforce local mount in HA environment
     */
    local?: pulumi.Input<boolean>;
    /**
     * Maximum possible lease duration for secrets in seconds
     */
    maxLeaseTtlSeconds?: pulumi.Input<number>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
    /**
     * Path to mount the backend at.
     */
    path?: pulumi.Input<string>;
    /**
     * Service Account to impersonate for plugin workload identity federation.
     */
    serviceAccountEmail?: pulumi.Input<string>;
}

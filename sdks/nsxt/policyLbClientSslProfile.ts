// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PolicyLbClientSslProfile extends pulumi.CustomResource {
    /**
     * Get an existing PolicyLbClientSslProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PolicyLbClientSslProfileState, opts?: pulumi.CustomResourceOptions): PolicyLbClientSslProfile {
        return new PolicyLbClientSslProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nsxt:index/policyLbClientSslProfile:PolicyLbClientSslProfile';

    /**
     * Returns true if the given object is an instance of PolicyLbClientSslProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PolicyLbClientSslProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PolicyLbClientSslProfile.__pulumiType;
    }

    /**
     * A label of cipher group which is mostly consumed by GUI. Default value is BALANCED.
     */
    public readonly cipherGroupLabel!: pulumi.Output<string | undefined>;
    /**
     * Supported SSL cipher list
     */
    public readonly ciphers!: pulumi.Output<string[]>;
    /**
     * Description for this resource
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Display name for this resource
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * This flag is set to true when all the ciphers and protocols are FIPS compliant. It is set to false when one of the
     * ciphers or protocols are not FIPS compliant.
     */
    public /*out*/ readonly isFips!: pulumi.Output<boolean>;
    /**
     * This flag is set to true when all the ciphers and protocols are secure. It is set to false when one of the ciphers or
     * protocols is insecure
     */
    public /*out*/ readonly isSecure!: pulumi.Output<boolean>;
    /**
     * NSX ID for this resource
     */
    public readonly nsxId!: pulumi.Output<string>;
    /**
     * Policy path for this resource
     */
    public /*out*/ readonly path!: pulumi.Output<string>;
    /**
     * During SSL handshake as part of the SSL client Hello client sends an ordered list of ciphers that it can support (or
     * prefers) and typically server selects the first one from the top of that list it can also support. For Perfect Forward
     * Secrecy(PFS), server could override the client's preference.
     */
    public readonly preferServerCiphers!: pulumi.Output<boolean | undefined>;
    /**
     * SSL versions TLS1.1 and TLS1.2 are supported and enabled by default. SSLv2, SSLv3, and TLS1.0 are supported, but
     * disabled by default
     */
    public readonly protocols!: pulumi.Output<string[]>;
    /**
     * The _revision property describes the current revision of the resource. To prevent clients from overwriting each other's
     * changes, PUT operations must include the current _revision of the resource, which clients should obtain by issuing a GET
     * operation. If the _revision provided in a PUT request is missing or stale, the operation will be rejected
     */
    public /*out*/ readonly revision!: pulumi.Output<number>;
    /**
     * If set to true, SSL session caching allows SSL client and server to reuse previously negotiated security parameters
     * avoiding the expensive public key operation during handshake.
     */
    public readonly sessionCacheEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Session cache timeout specifies how long the SSL session parameters are held on to and can be reused. Default value is
     * 300.
     */
    public readonly sessionCacheTimeout!: pulumi.Output<number | undefined>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    public readonly tags!: pulumi.Output<outputs.PolicyLbClientSslProfileTag[] | undefined>;

    /**
     * Create a PolicyLbClientSslProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PolicyLbClientSslProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PolicyLbClientSslProfileArgs | PolicyLbClientSslProfileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PolicyLbClientSslProfileState | undefined;
            resourceInputs["cipherGroupLabel"] = state ? state.cipherGroupLabel : undefined;
            resourceInputs["ciphers"] = state ? state.ciphers : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["isFips"] = state ? state.isFips : undefined;
            resourceInputs["isSecure"] = state ? state.isSecure : undefined;
            resourceInputs["nsxId"] = state ? state.nsxId : undefined;
            resourceInputs["path"] = state ? state.path : undefined;
            resourceInputs["preferServerCiphers"] = state ? state.preferServerCiphers : undefined;
            resourceInputs["protocols"] = state ? state.protocols : undefined;
            resourceInputs["revision"] = state ? state.revision : undefined;
            resourceInputs["sessionCacheEnabled"] = state ? state.sessionCacheEnabled : undefined;
            resourceInputs["sessionCacheTimeout"] = state ? state.sessionCacheTimeout : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as PolicyLbClientSslProfileArgs | undefined;
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            resourceInputs["cipherGroupLabel"] = args ? args.cipherGroupLabel : undefined;
            resourceInputs["ciphers"] = args ? args.ciphers : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["nsxId"] = args ? args.nsxId : undefined;
            resourceInputs["preferServerCiphers"] = args ? args.preferServerCiphers : undefined;
            resourceInputs["protocols"] = args ? args.protocols : undefined;
            resourceInputs["sessionCacheEnabled"] = args ? args.sessionCacheEnabled : undefined;
            resourceInputs["sessionCacheTimeout"] = args ? args.sessionCacheTimeout : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["isFips"] = undefined /*out*/;
            resourceInputs["isSecure"] = undefined /*out*/;
            resourceInputs["path"] = undefined /*out*/;
            resourceInputs["revision"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PolicyLbClientSslProfile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PolicyLbClientSslProfile resources.
 */
export interface PolicyLbClientSslProfileState {
    /**
     * A label of cipher group which is mostly consumed by GUI. Default value is BALANCED.
     */
    cipherGroupLabel?: pulumi.Input<string>;
    /**
     * Supported SSL cipher list
     */
    ciphers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Description for this resource
     */
    description?: pulumi.Input<string>;
    /**
     * Display name for this resource
     */
    displayName?: pulumi.Input<string>;
    /**
     * This flag is set to true when all the ciphers and protocols are FIPS compliant. It is set to false when one of the
     * ciphers or protocols are not FIPS compliant.
     */
    isFips?: pulumi.Input<boolean>;
    /**
     * This flag is set to true when all the ciphers and protocols are secure. It is set to false when one of the ciphers or
     * protocols is insecure
     */
    isSecure?: pulumi.Input<boolean>;
    /**
     * NSX ID for this resource
     */
    nsxId?: pulumi.Input<string>;
    /**
     * Policy path for this resource
     */
    path?: pulumi.Input<string>;
    /**
     * During SSL handshake as part of the SSL client Hello client sends an ordered list of ciphers that it can support (or
     * prefers) and typically server selects the first one from the top of that list it can also support. For Perfect Forward
     * Secrecy(PFS), server could override the client's preference.
     */
    preferServerCiphers?: pulumi.Input<boolean>;
    /**
     * SSL versions TLS1.1 and TLS1.2 are supported and enabled by default. SSLv2, SSLv3, and TLS1.0 are supported, but
     * disabled by default
     */
    protocols?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The _revision property describes the current revision of the resource. To prevent clients from overwriting each other's
     * changes, PUT operations must include the current _revision of the resource, which clients should obtain by issuing a GET
     * operation. If the _revision provided in a PUT request is missing or stale, the operation will be rejected
     */
    revision?: pulumi.Input<number>;
    /**
     * If set to true, SSL session caching allows SSL client and server to reuse previously negotiated security parameters
     * avoiding the expensive public key operation during handshake.
     */
    sessionCacheEnabled?: pulumi.Input<boolean>;
    /**
     * Session cache timeout specifies how long the SSL session parameters are held on to and can be reused. Default value is
     * 300.
     */
    sessionCacheTimeout?: pulumi.Input<number>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    tags?: pulumi.Input<pulumi.Input<inputs.PolicyLbClientSslProfileTag>[]>;
}

/**
 * The set of arguments for constructing a PolicyLbClientSslProfile resource.
 */
export interface PolicyLbClientSslProfileArgs {
    /**
     * A label of cipher group which is mostly consumed by GUI. Default value is BALANCED.
     */
    cipherGroupLabel?: pulumi.Input<string>;
    /**
     * Supported SSL cipher list
     */
    ciphers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Description for this resource
     */
    description?: pulumi.Input<string>;
    /**
     * Display name for this resource
     */
    displayName: pulumi.Input<string>;
    /**
     * NSX ID for this resource
     */
    nsxId?: pulumi.Input<string>;
    /**
     * During SSL handshake as part of the SSL client Hello client sends an ordered list of ciphers that it can support (or
     * prefers) and typically server selects the first one from the top of that list it can also support. For Perfect Forward
     * Secrecy(PFS), server could override the client's preference.
     */
    preferServerCiphers?: pulumi.Input<boolean>;
    /**
     * SSL versions TLS1.1 and TLS1.2 are supported and enabled by default. SSLv2, SSLv3, and TLS1.0 are supported, but
     * disabled by default
     */
    protocols?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * If set to true, SSL session caching allows SSL client and server to reuse previously negotiated security parameters
     * avoiding the expensive public key operation during handshake.
     */
    sessionCacheEnabled?: pulumi.Input<boolean>;
    /**
     * Session cache timeout specifies how long the SSL session parameters are held on to and can be reused. Default value is
     * 300.
     */
    sessionCacheTimeout?: pulumi.Input<number>;
    /**
     * Set of opaque identifiers meaningful to the user
     */
    tags?: pulumi.Input<pulumi.Input<inputs.PolicyLbClientSslProfileTag>[]>;
}

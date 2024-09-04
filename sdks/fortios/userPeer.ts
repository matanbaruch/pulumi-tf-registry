// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class UserPeer extends pulumi.CustomResource {
    /**
     * Get an existing UserPeer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserPeerState, opts?: pulumi.CustomResourceOptions): UserPeer {
        return new UserPeer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/userPeer:UserPeer';

    /**
     * Returns true if the given object is an instance of UserPeer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UserPeer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UserPeer.__pulumiType;
    }

    public readonly ca!: pulumi.Output<string>;
    public readonly cn!: pulumi.Output<string>;
    public readonly cnType!: pulumi.Output<string>;
    public readonly ldapMode!: pulumi.Output<string>;
    public readonly ldapPassword!: pulumi.Output<string | undefined>;
    public readonly ldapServer!: pulumi.Output<string>;
    public readonly ldapUsername!: pulumi.Output<string>;
    public readonly mandatoryCaVerify!: pulumi.Output<string>;
    public readonly mfaMode!: pulumi.Output<string>;
    public readonly mfaPassword!: pulumi.Output<string | undefined>;
    public readonly mfaServer!: pulumi.Output<string>;
    public readonly mfaUsername!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly ocspOverrideServer!: pulumi.Output<string>;
    public readonly passwd!: pulumi.Output<string | undefined>;
    public readonly subject!: pulumi.Output<string>;
    public readonly twoFactor!: pulumi.Output<string>;
    public readonly vdomparam!: pulumi.Output<string>;

    /**
     * Create a UserPeer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: UserPeerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UserPeerArgs | UserPeerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as UserPeerState | undefined;
            resourceInputs["ca"] = state ? state.ca : undefined;
            resourceInputs["cn"] = state ? state.cn : undefined;
            resourceInputs["cnType"] = state ? state.cnType : undefined;
            resourceInputs["ldapMode"] = state ? state.ldapMode : undefined;
            resourceInputs["ldapPassword"] = state ? state.ldapPassword : undefined;
            resourceInputs["ldapServer"] = state ? state.ldapServer : undefined;
            resourceInputs["ldapUsername"] = state ? state.ldapUsername : undefined;
            resourceInputs["mandatoryCaVerify"] = state ? state.mandatoryCaVerify : undefined;
            resourceInputs["mfaMode"] = state ? state.mfaMode : undefined;
            resourceInputs["mfaPassword"] = state ? state.mfaPassword : undefined;
            resourceInputs["mfaServer"] = state ? state.mfaServer : undefined;
            resourceInputs["mfaUsername"] = state ? state.mfaUsername : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["ocspOverrideServer"] = state ? state.ocspOverrideServer : undefined;
            resourceInputs["passwd"] = state ? state.passwd : undefined;
            resourceInputs["subject"] = state ? state.subject : undefined;
            resourceInputs["twoFactor"] = state ? state.twoFactor : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
        } else {
            const args = argsOrState as UserPeerArgs | undefined;
            resourceInputs["ca"] = args ? args.ca : undefined;
            resourceInputs["cn"] = args ? args.cn : undefined;
            resourceInputs["cnType"] = args ? args.cnType : undefined;
            resourceInputs["ldapMode"] = args ? args.ldapMode : undefined;
            resourceInputs["ldapPassword"] = args?.ldapPassword ? pulumi.secret(args.ldapPassword) : undefined;
            resourceInputs["ldapServer"] = args ? args.ldapServer : undefined;
            resourceInputs["ldapUsername"] = args ? args.ldapUsername : undefined;
            resourceInputs["mandatoryCaVerify"] = args ? args.mandatoryCaVerify : undefined;
            resourceInputs["mfaMode"] = args ? args.mfaMode : undefined;
            resourceInputs["mfaPassword"] = args ? args.mfaPassword : undefined;
            resourceInputs["mfaServer"] = args ? args.mfaServer : undefined;
            resourceInputs["mfaUsername"] = args ? args.mfaUsername : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["ocspOverrideServer"] = args ? args.ocspOverrideServer : undefined;
            resourceInputs["passwd"] = args?.passwd ? pulumi.secret(args.passwd) : undefined;
            resourceInputs["subject"] = args ? args.subject : undefined;
            resourceInputs["twoFactor"] = args ? args.twoFactor : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["ldapPassword", "passwd"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(UserPeer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering UserPeer resources.
 */
export interface UserPeerState {
    ca?: pulumi.Input<string>;
    cn?: pulumi.Input<string>;
    cnType?: pulumi.Input<string>;
    ldapMode?: pulumi.Input<string>;
    ldapPassword?: pulumi.Input<string>;
    ldapServer?: pulumi.Input<string>;
    ldapUsername?: pulumi.Input<string>;
    mandatoryCaVerify?: pulumi.Input<string>;
    mfaMode?: pulumi.Input<string>;
    mfaPassword?: pulumi.Input<string>;
    mfaServer?: pulumi.Input<string>;
    mfaUsername?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    ocspOverrideServer?: pulumi.Input<string>;
    passwd?: pulumi.Input<string>;
    subject?: pulumi.Input<string>;
    twoFactor?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a UserPeer resource.
 */
export interface UserPeerArgs {
    ca?: pulumi.Input<string>;
    cn?: pulumi.Input<string>;
    cnType?: pulumi.Input<string>;
    ldapMode?: pulumi.Input<string>;
    ldapPassword?: pulumi.Input<string>;
    ldapServer?: pulumi.Input<string>;
    ldapUsername?: pulumi.Input<string>;
    mandatoryCaVerify?: pulumi.Input<string>;
    mfaMode?: pulumi.Input<string>;
    mfaPassword?: pulumi.Input<string>;
    mfaServer?: pulumi.Input<string>;
    mfaUsername?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    ocspOverrideServer?: pulumi.Input<string>;
    passwd?: pulumi.Input<string>;
    subject?: pulumi.Input<string>;
    twoFactor?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}

// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Wallet extends pulumi.CustomResource {
    /**
     * Get an existing Wallet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WalletState, opts?: pulumi.CustomResourceOptions): Wallet {
        return new Wallet(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'clumio:index/wallet:Wallet';

    /**
     * Returns true if the given object is an instance of Wallet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Wallet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Wallet.__pulumiType;
    }

    /**
     * Identifier of the AWS account to be setup with BYOK and associated with the wallet.
     */
    public readonly accountNativeId!: pulumi.Output<string>;
    /**
     * Identifier of the AWS account associated with Clumio. This identifier is provided so that access to the service role for
     * Clumio can be restricted to just this account.
     */
    public /*out*/ readonly clumioAccountId!: pulumi.Output<string>;
    /**
     * State describes the state of the wallet. Valid states are: Waiting: The wallet has been created, but a stack hasn't been
     * created. The wallet can't be used in this state. Enabled: The wallet has been created and a stack has been created for
     * the wallet. This is the normal expected state of a wallet in use. Error: The wallet is inaccessible.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Token used to identify resources set up by the BYOK template installation on the account being connected.
     */
    public /*out*/ readonly token!: pulumi.Output<string>;

    /**
     * Create a Wallet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WalletArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WalletArgs | WalletState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WalletState | undefined;
            resourceInputs["accountNativeId"] = state ? state.accountNativeId : undefined;
            resourceInputs["clumioAccountId"] = state ? state.clumioAccountId : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["token"] = state ? state.token : undefined;
        } else {
            const args = argsOrState as WalletArgs | undefined;
            if ((!args || args.accountNativeId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountNativeId'");
            }
            resourceInputs["accountNativeId"] = args ? args.accountNativeId : undefined;
            resourceInputs["clumioAccountId"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["token"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Wallet.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Wallet resources.
 */
export interface WalletState {
    /**
     * Identifier of the AWS account to be setup with BYOK and associated with the wallet.
     */
    accountNativeId?: pulumi.Input<string>;
    /**
     * Identifier of the AWS account associated with Clumio. This identifier is provided so that access to the service role for
     * Clumio can be restricted to just this account.
     */
    clumioAccountId?: pulumi.Input<string>;
    /**
     * State describes the state of the wallet. Valid states are: Waiting: The wallet has been created, but a stack hasn't been
     * created. The wallet can't be used in this state. Enabled: The wallet has been created and a stack has been created for
     * the wallet. This is the normal expected state of a wallet in use. Error: The wallet is inaccessible.
     */
    state?: pulumi.Input<string>;
    /**
     * Token used to identify resources set up by the BYOK template installation on the account being connected.
     */
    token?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Wallet resource.
 */
export interface WalletArgs {
    /**
     * Identifier of the AWS account to be setup with BYOK and associated with the wallet.
     */
    accountNativeId: pulumi.Input<string>;
}

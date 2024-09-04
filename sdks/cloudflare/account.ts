// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Account extends pulumi.CustomResource {
    /**
     * Get an existing Account resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AccountState, opts?: pulumi.CustomResourceOptions): Account {
        return new Account(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cloudflare:index/account:Account';

    /**
     * Returns true if the given object is an instance of Account.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Account {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Account.__pulumiType;
    }

    /**
     * Whether 2FA is enforced on the account. Defaults to `false`.
     */
    public readonly enforceTwofactor!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the account that is displayed in the Cloudflare dashboard.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Account type. Available values: `enterprise`, `standard`. Defaults to `standard`. **Modifying this attribute will force
     * creation of a new resource.**
     */
    public readonly type!: pulumi.Output<string | undefined>;

    /**
     * Create a Account resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AccountArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AccountArgs | AccountState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AccountState | undefined;
            resourceInputs["enforceTwofactor"] = state ? state.enforceTwofactor : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as AccountArgs | undefined;
            resourceInputs["enforceTwofactor"] = args ? args.enforceTwofactor : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Account.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Account resources.
 */
export interface AccountState {
    /**
     * Whether 2FA is enforced on the account. Defaults to `false`.
     */
    enforceTwofactor?: pulumi.Input<boolean>;
    /**
     * The name of the account that is displayed in the Cloudflare dashboard.
     */
    name?: pulumi.Input<string>;
    /**
     * Account type. Available values: `enterprise`, `standard`. Defaults to `standard`. **Modifying this attribute will force
     * creation of a new resource.**
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Account resource.
 */
export interface AccountArgs {
    /**
     * Whether 2FA is enforced on the account. Defaults to `false`.
     */
    enforceTwofactor?: pulumi.Input<boolean>;
    /**
     * The name of the account that is displayed in the Cloudflare dashboard.
     */
    name?: pulumi.Input<string>;
    /**
     * Account type. Available values: `enterprise`, `standard`. Defaults to `standard`. **Modifying this attribute will force
     * creation of a new resource.**
     */
    type?: pulumi.Input<string>;
}

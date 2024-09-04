// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SagClientUser extends pulumi.CustomResource {
    /**
     * Get an existing SagClientUser resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SagClientUserState, opts?: pulumi.CustomResourceOptions): SagClientUser {
        return new SagClientUser(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/sagClientUser:SagClientUser';

    /**
     * Returns true if the given object is an instance of SagClientUser.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SagClientUser {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SagClientUser.__pulumiType;
    }

    public readonly bandwidth!: pulumi.Output<number>;
    public readonly clientIp!: pulumi.Output<string | undefined>;
    public readonly kmsEncryptedPassword!: pulumi.Output<string | undefined>;
    public readonly kmsEncryptionContext!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly password!: pulumi.Output<string>;
    public readonly sagId!: pulumi.Output<string>;
    public readonly userMail!: pulumi.Output<string>;
    public readonly userName!: pulumi.Output<string>;

    /**
     * Create a SagClientUser resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SagClientUserArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SagClientUserArgs | SagClientUserState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SagClientUserState | undefined;
            resourceInputs["bandwidth"] = state ? state.bandwidth : undefined;
            resourceInputs["clientIp"] = state ? state.clientIp : undefined;
            resourceInputs["kmsEncryptedPassword"] = state ? state.kmsEncryptedPassword : undefined;
            resourceInputs["kmsEncryptionContext"] = state ? state.kmsEncryptionContext : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["sagId"] = state ? state.sagId : undefined;
            resourceInputs["userMail"] = state ? state.userMail : undefined;
            resourceInputs["userName"] = state ? state.userName : undefined;
        } else {
            const args = argsOrState as SagClientUserArgs | undefined;
            if ((!args || args.bandwidth === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bandwidth'");
            }
            if ((!args || args.sagId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sagId'");
            }
            if ((!args || args.userMail === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userMail'");
            }
            resourceInputs["bandwidth"] = args ? args.bandwidth : undefined;
            resourceInputs["clientIp"] = args ? args.clientIp : undefined;
            resourceInputs["kmsEncryptedPassword"] = args ? args.kmsEncryptedPassword : undefined;
            resourceInputs["kmsEncryptionContext"] = args ? args.kmsEncryptionContext : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["sagId"] = args ? args.sagId : undefined;
            resourceInputs["userMail"] = args ? args.userMail : undefined;
            resourceInputs["userName"] = args ? args.userName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SagClientUser.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SagClientUser resources.
 */
export interface SagClientUserState {
    bandwidth?: pulumi.Input<number>;
    clientIp?: pulumi.Input<string>;
    kmsEncryptedPassword?: pulumi.Input<string>;
    kmsEncryptionContext?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    password?: pulumi.Input<string>;
    sagId?: pulumi.Input<string>;
    userMail?: pulumi.Input<string>;
    userName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SagClientUser resource.
 */
export interface SagClientUserArgs {
    bandwidth: pulumi.Input<number>;
    clientIp?: pulumi.Input<string>;
    kmsEncryptedPassword?: pulumi.Input<string>;
    kmsEncryptionContext?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    password?: pulumi.Input<string>;
    sagId: pulumi.Input<string>;
    userMail: pulumi.Input<string>;
    userName?: pulumi.Input<string>;
}

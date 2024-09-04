// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CynosdbAccount extends pulumi.CustomResource {
    /**
     * Get an existing CynosdbAccount resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CynosdbAccountState, opts?: pulumi.CustomResourceOptions): CynosdbAccount {
        return new CynosdbAccount(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/cynosdbAccount:CynosdbAccount';

    /**
     * Returns true if the given object is an instance of CynosdbAccount.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CynosdbAccount {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CynosdbAccount.__pulumiType;
    }

    /**
     * Account name, including alphanumeric _, Start with a letter, end with a letter or number, length 1-16.
     */
    public readonly accountName!: pulumi.Output<string>;
    /**
     * Password, with a length range of 8 to 64 characters.
     */
    public readonly accountPassword!: pulumi.Output<string>;
    /**
     * Cluster ID.
     */
    public readonly clusterId!: pulumi.Output<string>;
    /**
     * describe.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * main engine.
     */
    public readonly host!: pulumi.Output<string>;
    /**
     * The maximum number of user connections cannot be greater than 10240.
     */
    public readonly maxUserConnections!: pulumi.Output<number | undefined>;

    /**
     * Create a CynosdbAccount resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CynosdbAccountArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CynosdbAccountArgs | CynosdbAccountState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CynosdbAccountState | undefined;
            resourceInputs["accountName"] = state ? state.accountName : undefined;
            resourceInputs["accountPassword"] = state ? state.accountPassword : undefined;
            resourceInputs["clusterId"] = state ? state.clusterId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["host"] = state ? state.host : undefined;
            resourceInputs["maxUserConnections"] = state ? state.maxUserConnections : undefined;
        } else {
            const args = argsOrState as CynosdbAccountArgs | undefined;
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.accountPassword === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountPassword'");
            }
            if ((!args || args.clusterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterId'");
            }
            if ((!args || args.host === undefined) && !opts.urn) {
                throw new Error("Missing required property 'host'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["accountPassword"] = args?.accountPassword ? pulumi.secret(args.accountPassword) : undefined;
            resourceInputs["clusterId"] = args ? args.clusterId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["host"] = args ? args.host : undefined;
            resourceInputs["maxUserConnections"] = args ? args.maxUserConnections : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["accountPassword"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(CynosdbAccount.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CynosdbAccount resources.
 */
export interface CynosdbAccountState {
    /**
     * Account name, including alphanumeric _, Start with a letter, end with a letter or number, length 1-16.
     */
    accountName?: pulumi.Input<string>;
    /**
     * Password, with a length range of 8 to 64 characters.
     */
    accountPassword?: pulumi.Input<string>;
    /**
     * Cluster ID.
     */
    clusterId?: pulumi.Input<string>;
    /**
     * describe.
     */
    description?: pulumi.Input<string>;
    /**
     * main engine.
     */
    host?: pulumi.Input<string>;
    /**
     * The maximum number of user connections cannot be greater than 10240.
     */
    maxUserConnections?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a CynosdbAccount resource.
 */
export interface CynosdbAccountArgs {
    /**
     * Account name, including alphanumeric _, Start with a letter, end with a letter or number, length 1-16.
     */
    accountName: pulumi.Input<string>;
    /**
     * Password, with a length range of 8 to 64 characters.
     */
    accountPassword: pulumi.Input<string>;
    /**
     * Cluster ID.
     */
    clusterId: pulumi.Input<string>;
    /**
     * describe.
     */
    description?: pulumi.Input<string>;
    /**
     * main engine.
     */
    host: pulumi.Input<string>;
    /**
     * The maximum number of user connections cannot be greater than 10240.
     */
    maxUserConnections?: pulumi.Input<number>;
}

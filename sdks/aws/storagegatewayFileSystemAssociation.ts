// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class StoragegatewayFileSystemAssociation extends pulumi.CustomResource {
    /**
     * Get an existing StoragegatewayFileSystemAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StoragegatewayFileSystemAssociationState, opts?: pulumi.CustomResourceOptions): StoragegatewayFileSystemAssociation {
        return new StoragegatewayFileSystemAssociation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/storagegatewayFileSystemAssociation:StoragegatewayFileSystemAssociation';

    /**
     * Returns true if the given object is an instance of StoragegatewayFileSystemAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StoragegatewayFileSystemAssociation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StoragegatewayFileSystemAssociation.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly auditDestinationArn!: pulumi.Output<string | undefined>;
    public readonly cacheAttributes!: pulumi.Output<outputs.StoragegatewayFileSystemAssociationCacheAttributes | undefined>;
    public readonly gatewayArn!: pulumi.Output<string>;
    public readonly locationArn!: pulumi.Output<string>;
    public readonly password!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.StoragegatewayFileSystemAssociationTimeouts | undefined>;
    public readonly username!: pulumi.Output<string>;

    /**
     * Create a StoragegatewayFileSystemAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StoragegatewayFileSystemAssociationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: StoragegatewayFileSystemAssociationArgs | StoragegatewayFileSystemAssociationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as StoragegatewayFileSystemAssociationState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["auditDestinationArn"] = state ? state.auditDestinationArn : undefined;
            resourceInputs["cacheAttributes"] = state ? state.cacheAttributes : undefined;
            resourceInputs["gatewayArn"] = state ? state.gatewayArn : undefined;
            resourceInputs["locationArn"] = state ? state.locationArn : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as StoragegatewayFileSystemAssociationArgs | undefined;
            if ((!args || args.gatewayArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'gatewayArn'");
            }
            if ((!args || args.locationArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'locationArn'");
            }
            if ((!args || args.password === undefined) && !opts.urn) {
                throw new Error("Missing required property 'password'");
            }
            if ((!args || args.username === undefined) && !opts.urn) {
                throw new Error("Missing required property 'username'");
            }
            resourceInputs["auditDestinationArn"] = args ? args.auditDestinationArn : undefined;
            resourceInputs["cacheAttributes"] = args ? args.cacheAttributes : undefined;
            resourceInputs["gatewayArn"] = args ? args.gatewayArn : undefined;
            resourceInputs["locationArn"] = args ? args.locationArn : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["arn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(StoragegatewayFileSystemAssociation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering StoragegatewayFileSystemAssociation resources.
 */
export interface StoragegatewayFileSystemAssociationState {
    arn?: pulumi.Input<string>;
    auditDestinationArn?: pulumi.Input<string>;
    cacheAttributes?: pulumi.Input<inputs.StoragegatewayFileSystemAssociationCacheAttributes>;
    gatewayArn?: pulumi.Input<string>;
    locationArn?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.StoragegatewayFileSystemAssociationTimeouts>;
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a StoragegatewayFileSystemAssociation resource.
 */
export interface StoragegatewayFileSystemAssociationArgs {
    auditDestinationArn?: pulumi.Input<string>;
    cacheAttributes?: pulumi.Input<inputs.StoragegatewayFileSystemAssociationCacheAttributes>;
    gatewayArn: pulumi.Input<string>;
    locationArn: pulumi.Input<string>;
    password: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.StoragegatewayFileSystemAssociationTimeouts>;
    username: pulumi.Input<string>;
}

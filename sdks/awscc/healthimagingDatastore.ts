// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class HealthimagingDatastore extends pulumi.CustomResource {
    /**
     * Get an existing HealthimagingDatastore resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HealthimagingDatastoreState, opts?: pulumi.CustomResourceOptions): HealthimagingDatastore {
        return new HealthimagingDatastore(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/healthimagingDatastore:HealthimagingDatastore';

    /**
     * Returns true if the given object is an instance of HealthimagingDatastore.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HealthimagingDatastore {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HealthimagingDatastore.__pulumiType;
    }

    /**
     * The timestamp when the data store was created.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * The Datastore's ARN.
     */
    public /*out*/ readonly datastoreArn!: pulumi.Output<string>;
    public /*out*/ readonly datastoreId!: pulumi.Output<string>;
    /**
     * User friendly name for Datastore.
     */
    public readonly datastoreName!: pulumi.Output<string>;
    /**
     * A string to denote the Datastore's state.
     */
    public /*out*/ readonly datastoreStatus!: pulumi.Output<string>;
    /**
     * ARN referencing a KMS key or KMS key alias.
     */
    public readonly kmsKeyArn!: pulumi.Output<string>;
    /**
     * A Map of key value pairs for Tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string}>;
    /**
     * The timestamp when the data store was created.
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;

    /**
     * Create a HealthimagingDatastore resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: HealthimagingDatastoreArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: HealthimagingDatastoreArgs | HealthimagingDatastoreState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as HealthimagingDatastoreState | undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["datastoreArn"] = state ? state.datastoreArn : undefined;
            resourceInputs["datastoreId"] = state ? state.datastoreId : undefined;
            resourceInputs["datastoreName"] = state ? state.datastoreName : undefined;
            resourceInputs["datastoreStatus"] = state ? state.datastoreStatus : undefined;
            resourceInputs["kmsKeyArn"] = state ? state.kmsKeyArn : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["updatedAt"] = state ? state.updatedAt : undefined;
        } else {
            const args = argsOrState as HealthimagingDatastoreArgs | undefined;
            resourceInputs["datastoreName"] = args ? args.datastoreName : undefined;
            resourceInputs["kmsKeyArn"] = args ? args.kmsKeyArn : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["datastoreArn"] = undefined /*out*/;
            resourceInputs["datastoreId"] = undefined /*out*/;
            resourceInputs["datastoreStatus"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(HealthimagingDatastore.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering HealthimagingDatastore resources.
 */
export interface HealthimagingDatastoreState {
    /**
     * The timestamp when the data store was created.
     */
    createdAt?: pulumi.Input<string>;
    /**
     * The Datastore's ARN.
     */
    datastoreArn?: pulumi.Input<string>;
    datastoreId?: pulumi.Input<string>;
    /**
     * User friendly name for Datastore.
     */
    datastoreName?: pulumi.Input<string>;
    /**
     * A string to denote the Datastore's state.
     */
    datastoreStatus?: pulumi.Input<string>;
    /**
     * ARN referencing a KMS key or KMS key alias.
     */
    kmsKeyArn?: pulumi.Input<string>;
    /**
     * A Map of key value pairs for Tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The timestamp when the data store was created.
     */
    updatedAt?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a HealthimagingDatastore resource.
 */
export interface HealthimagingDatastoreArgs {
    /**
     * User friendly name for Datastore.
     */
    datastoreName?: pulumi.Input<string>;
    /**
     * ARN referencing a KMS key or KMS key alias.
     */
    kmsKeyArn?: pulumi.Input<string>;
    /**
     * A Map of key value pairs for Tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

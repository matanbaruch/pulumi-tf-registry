// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class FirestoreField extends pulumi.CustomResource {
    /**
     * Get an existing FirestoreField resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirestoreFieldState, opts?: pulumi.CustomResourceOptions): FirestoreField {
        return new FirestoreField(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/firestoreField:FirestoreField';

    /**
     * Returns true if the given object is an instance of FirestoreField.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirestoreField {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirestoreField.__pulumiType;
    }

    /**
     * The id of the collection group to configure.
     */
    public readonly collection!: pulumi.Output<string>;
    /**
     * The Firestore database id. Defaults to '"(default)"'.
     */
    public readonly database!: pulumi.Output<string | undefined>;
    /**
     * The id of the field to configure.
     */
    public readonly field!: pulumi.Output<string>;
    /**
     * The single field index configuration for this field. Creating an index configuration for this field will override any
     * inherited configuration with the indexes specified. Configuring the index configuration with an empty block disables all
     * indexes on the field.
     */
    public readonly indexConfig!: pulumi.Output<outputs.FirestoreFieldIndexConfig | undefined>;
    /**
     * The name of this field. Format:
     * 'projects/{{project}}/databases/{{database}}/collectionGroups/{{collection}}/fields/{{field}}'
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.FirestoreFieldTimeouts | undefined>;
    /**
     * The TTL configuration for this Field. If set to an empty block (i.e. 'ttl_config {}'), a TTL policy is configured based
     * on the field. If unset, a TTL policy is not configured (or will be disabled upon updating the resource).
     */
    public readonly ttlConfig!: pulumi.Output<outputs.FirestoreFieldTtlConfig | undefined>;

    /**
     * Create a FirestoreField resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirestoreFieldArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FirestoreFieldArgs | FirestoreFieldState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FirestoreFieldState | undefined;
            resourceInputs["collection"] = state ? state.collection : undefined;
            resourceInputs["database"] = state ? state.database : undefined;
            resourceInputs["field"] = state ? state.field : undefined;
            resourceInputs["indexConfig"] = state ? state.indexConfig : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["ttlConfig"] = state ? state.ttlConfig : undefined;
        } else {
            const args = argsOrState as FirestoreFieldArgs | undefined;
            if ((!args || args.collection === undefined) && !opts.urn) {
                throw new Error("Missing required property 'collection'");
            }
            if ((!args || args.field === undefined) && !opts.urn) {
                throw new Error("Missing required property 'field'");
            }
            resourceInputs["collection"] = args ? args.collection : undefined;
            resourceInputs["database"] = args ? args.database : undefined;
            resourceInputs["field"] = args ? args.field : undefined;
            resourceInputs["indexConfig"] = args ? args.indexConfig : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["ttlConfig"] = args ? args.ttlConfig : undefined;
            resourceInputs["name"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FirestoreField.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FirestoreField resources.
 */
export interface FirestoreFieldState {
    /**
     * The id of the collection group to configure.
     */
    collection?: pulumi.Input<string>;
    /**
     * The Firestore database id. Defaults to '"(default)"'.
     */
    database?: pulumi.Input<string>;
    /**
     * The id of the field to configure.
     */
    field?: pulumi.Input<string>;
    /**
     * The single field index configuration for this field. Creating an index configuration for this field will override any
     * inherited configuration with the indexes specified. Configuring the index configuration with an empty block disables all
     * indexes on the field.
     */
    indexConfig?: pulumi.Input<inputs.FirestoreFieldIndexConfig>;
    /**
     * The name of this field. Format:
     * 'projects/{{project}}/databases/{{database}}/collectionGroups/{{collection}}/fields/{{field}}'
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.FirestoreFieldTimeouts>;
    /**
     * The TTL configuration for this Field. If set to an empty block (i.e. 'ttl_config {}'), a TTL policy is configured based
     * on the field. If unset, a TTL policy is not configured (or will be disabled upon updating the resource).
     */
    ttlConfig?: pulumi.Input<inputs.FirestoreFieldTtlConfig>;
}

/**
 * The set of arguments for constructing a FirestoreField resource.
 */
export interface FirestoreFieldArgs {
    /**
     * The id of the collection group to configure.
     */
    collection: pulumi.Input<string>;
    /**
     * The Firestore database id. Defaults to '"(default)"'.
     */
    database?: pulumi.Input<string>;
    /**
     * The id of the field to configure.
     */
    field: pulumi.Input<string>;
    /**
     * The single field index configuration for this field. Creating an index configuration for this field will override any
     * inherited configuration with the indexes specified. Configuring the index configuration with an empty block disables all
     * indexes on the field.
     */
    indexConfig?: pulumi.Input<inputs.FirestoreFieldIndexConfig>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.FirestoreFieldTimeouts>;
    /**
     * The TTL configuration for this Field. If set to an empty block (i.e. 'ttl_config {}'), a TTL policy is configured based
     * on the field. If unset, a TTL policy is not configured (or will be disabled upon updating the resource).
     */
    ttlConfig?: pulumi.Input<inputs.FirestoreFieldTtlConfig>;
}

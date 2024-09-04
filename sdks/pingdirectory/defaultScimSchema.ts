// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DefaultScimSchema extends pulumi.CustomResource {
    /**
     * Get an existing DefaultScimSchema resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DefaultScimSchemaState, opts?: pulumi.CustomResourceOptions): DefaultScimSchema {
        return new DefaultScimSchema(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingdirectory:index/defaultScimSchema:DefaultScimSchema';

    /**
     * Returns true if the given object is an instance of DefaultScimSchema.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DefaultScimSchema {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DefaultScimSchema.__pulumiType;
    }

    /**
     * A description for this SCIM Schema
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * The human readable name for this SCIM Schema.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly notifications!: pulumi.Output<string[]>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly requiredActions!: pulumi.Output<outputs.DefaultScimSchemaRequiredAction[]>;
    /**
     * The URN which identifies this SCIM Schema.
     */
    public readonly schemaUrn!: pulumi.Output<string>;
    /**
     * The type of SCIM Schema resource. Options are ['scim-schema']
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DefaultScimSchema resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DefaultScimSchemaArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DefaultScimSchemaArgs | DefaultScimSchemaState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DefaultScimSchemaState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["notifications"] = state ? state.notifications : undefined;
            resourceInputs["requiredActions"] = state ? state.requiredActions : undefined;
            resourceInputs["schemaUrn"] = state ? state.schemaUrn : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as DefaultScimSchemaArgs | undefined;
            if ((!args || args.schemaUrn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schemaUrn'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["schemaUrn"] = args ? args.schemaUrn : undefined;
            resourceInputs["notifications"] = undefined /*out*/;
            resourceInputs["requiredActions"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DefaultScimSchema.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DefaultScimSchema resources.
 */
export interface DefaultScimSchemaState {
    /**
     * A description for this SCIM Schema
     */
    description?: pulumi.Input<string>;
    /**
     * The human readable name for this SCIM Schema.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    notifications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    requiredActions?: pulumi.Input<pulumi.Input<inputs.DefaultScimSchemaRequiredAction>[]>;
    /**
     * The URN which identifies this SCIM Schema.
     */
    schemaUrn?: pulumi.Input<string>;
    /**
     * The type of SCIM Schema resource. Options are ['scim-schema']
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DefaultScimSchema resource.
 */
export interface DefaultScimSchemaArgs {
    /**
     * A description for this SCIM Schema
     */
    description?: pulumi.Input<string>;
    /**
     * The human readable name for this SCIM Schema.
     */
    displayName?: pulumi.Input<string>;
    /**
     * The URN which identifies this SCIM Schema.
     */
    schemaUrn: pulumi.Input<string>;
}

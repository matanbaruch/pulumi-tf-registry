// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ManagementServiceDceRpc extends pulumi.CustomResource {
    /**
     * Get an existing ManagementServiceDceRpc resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ManagementServiceDceRpcState, opts?: pulumi.CustomResourceOptions): ManagementServiceDceRpc {
        return new ManagementServiceDceRpc(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'checkpoint:index/managementServiceDceRpc:ManagementServiceDceRpc';

    /**
     * Returns true if the given object is an instance of ManagementServiceDceRpc.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagementServiceDceRpc {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagementServiceDceRpc.__pulumiType;
    }

    /**
     * Color of the object. Should be one of existing colors.
     */
    public readonly color!: pulumi.Output<string | undefined>;
    /**
     * Comments string.
     */
    public readonly comments!: pulumi.Output<string | undefined>;
    /**
     * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted -
     * warnings will also be ignored.
     */
    public readonly ignoreErrors!: pulumi.Output<boolean | undefined>;
    /**
     * Apply changes ignoring warnings.
     */
    public readonly ignoreWarnings!: pulumi.Output<boolean | undefined>;
    /**
     * Network interface UUID.
     */
    public readonly interfaceUuid!: pulumi.Output<string | undefined>;
    /**
     * Keep connections open after policy has been installed even if they are not allowed under the new policy. This overrides
     * the settings in the Connection Persistence page. If you change this property, the change will not affect open
     * connections, but only future connections.
     */
    public readonly keepConnectionsOpenAfterPolicyInstallation!: pulumi.Output<boolean | undefined>;
    /**
     * Object name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Collection of tag identifiers.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;

    /**
     * Create a ManagementServiceDceRpc resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ManagementServiceDceRpcArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ManagementServiceDceRpcArgs | ManagementServiceDceRpcState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ManagementServiceDceRpcState | undefined;
            resourceInputs["color"] = state ? state.color : undefined;
            resourceInputs["comments"] = state ? state.comments : undefined;
            resourceInputs["ignoreErrors"] = state ? state.ignoreErrors : undefined;
            resourceInputs["ignoreWarnings"] = state ? state.ignoreWarnings : undefined;
            resourceInputs["interfaceUuid"] = state ? state.interfaceUuid : undefined;
            resourceInputs["keepConnectionsOpenAfterPolicyInstallation"] = state ? state.keepConnectionsOpenAfterPolicyInstallation : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as ManagementServiceDceRpcArgs | undefined;
            resourceInputs["color"] = args ? args.color : undefined;
            resourceInputs["comments"] = args ? args.comments : undefined;
            resourceInputs["ignoreErrors"] = args ? args.ignoreErrors : undefined;
            resourceInputs["ignoreWarnings"] = args ? args.ignoreWarnings : undefined;
            resourceInputs["interfaceUuid"] = args ? args.interfaceUuid : undefined;
            resourceInputs["keepConnectionsOpenAfterPolicyInstallation"] = args ? args.keepConnectionsOpenAfterPolicyInstallation : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ManagementServiceDceRpc.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ManagementServiceDceRpc resources.
 */
export interface ManagementServiceDceRpcState {
    /**
     * Color of the object. Should be one of existing colors.
     */
    color?: pulumi.Input<string>;
    /**
     * Comments string.
     */
    comments?: pulumi.Input<string>;
    /**
     * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted -
     * warnings will also be ignored.
     */
    ignoreErrors?: pulumi.Input<boolean>;
    /**
     * Apply changes ignoring warnings.
     */
    ignoreWarnings?: pulumi.Input<boolean>;
    /**
     * Network interface UUID.
     */
    interfaceUuid?: pulumi.Input<string>;
    /**
     * Keep connections open after policy has been installed even if they are not allowed under the new policy. This overrides
     * the settings in the Connection Persistence page. If you change this property, the change will not affect open
     * connections, but only future connections.
     */
    keepConnectionsOpenAfterPolicyInstallation?: pulumi.Input<boolean>;
    /**
     * Object name.
     */
    name?: pulumi.Input<string>;
    /**
     * Collection of tag identifiers.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a ManagementServiceDceRpc resource.
 */
export interface ManagementServiceDceRpcArgs {
    /**
     * Color of the object. Should be one of existing colors.
     */
    color?: pulumi.Input<string>;
    /**
     * Comments string.
     */
    comments?: pulumi.Input<string>;
    /**
     * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted -
     * warnings will also be ignored.
     */
    ignoreErrors?: pulumi.Input<boolean>;
    /**
     * Apply changes ignoring warnings.
     */
    ignoreWarnings?: pulumi.Input<boolean>;
    /**
     * Network interface UUID.
     */
    interfaceUuid?: pulumi.Input<string>;
    /**
     * Keep connections open after policy has been installed even if they are not allowed under the new policy. This overrides
     * the settings in the Connection Persistence page. If you change this property, the change will not affect open
     * connections, but only future connections.
     */
    keepConnectionsOpenAfterPolicyInstallation?: pulumi.Input<boolean>;
    /**
     * Object name.
     */
    name?: pulumi.Input<string>;
    /**
     * Collection of tag identifiers.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

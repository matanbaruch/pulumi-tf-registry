// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class TransferConnector extends pulumi.CustomResource {
    /**
     * Get an existing TransferConnector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TransferConnectorState, opts?: pulumi.CustomResourceOptions): TransferConnector {
        return new TransferConnector(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/transferConnector:TransferConnector';

    /**
     * Returns true if the given object is an instance of TransferConnector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TransferConnector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TransferConnector.__pulumiType;
    }

    /**
     * Specifies the access role for the connector.
     */
    public readonly accessRole!: pulumi.Output<string>;
    /**
     * Specifies the unique Amazon Resource Name (ARN) for the connector.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * Configuration for an AS2 connector.
     */
    public readonly as2Config!: pulumi.Output<outputs.TransferConnectorAs2Config>;
    /**
     * A unique identifier for the connector.
     */
    public /*out*/ readonly connectorId!: pulumi.Output<string>;
    /**
     * Specifies the logging role for the connector.
     */
    public readonly loggingRole!: pulumi.Output<string>;
    /**
     * Security policy for SFTP Connector
     */
    public readonly securityPolicyName!: pulumi.Output<string>;
    /**
     * The list of egress IP addresses of this connector. These IP addresses are assigned automatically when you create the
     * connector.
     */
    public /*out*/ readonly serviceManagedEgressIpAddresses!: pulumi.Output<string[]>;
    /**
     * Configuration for an SFTP connector.
     */
    public readonly sftpConfig!: pulumi.Output<outputs.TransferConnectorSftpConfig>;
    /**
     * Key-value pairs that can be used to group and search for connectors. Tags are metadata attached to connectors for any
     * purpose.
     */
    public readonly tags!: pulumi.Output<outputs.TransferConnectorTag[]>;
    /**
     * URL for Connector
     */
    public readonly url!: pulumi.Output<string>;

    /**
     * Create a TransferConnector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TransferConnectorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TransferConnectorArgs | TransferConnectorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TransferConnectorState | undefined;
            resourceInputs["accessRole"] = state ? state.accessRole : undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["as2Config"] = state ? state.as2Config : undefined;
            resourceInputs["connectorId"] = state ? state.connectorId : undefined;
            resourceInputs["loggingRole"] = state ? state.loggingRole : undefined;
            resourceInputs["securityPolicyName"] = state ? state.securityPolicyName : undefined;
            resourceInputs["serviceManagedEgressIpAddresses"] = state ? state.serviceManagedEgressIpAddresses : undefined;
            resourceInputs["sftpConfig"] = state ? state.sftpConfig : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as TransferConnectorArgs | undefined;
            if ((!args || args.accessRole === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessRole'");
            }
            if ((!args || args.url === undefined) && !opts.urn) {
                throw new Error("Missing required property 'url'");
            }
            resourceInputs["accessRole"] = args ? args.accessRole : undefined;
            resourceInputs["as2Config"] = args ? args.as2Config : undefined;
            resourceInputs["loggingRole"] = args ? args.loggingRole : undefined;
            resourceInputs["securityPolicyName"] = args ? args.securityPolicyName : undefined;
            resourceInputs["sftpConfig"] = args ? args.sftpConfig : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["connectorId"] = undefined /*out*/;
            resourceInputs["serviceManagedEgressIpAddresses"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TransferConnector.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TransferConnector resources.
 */
export interface TransferConnectorState {
    /**
     * Specifies the access role for the connector.
     */
    accessRole?: pulumi.Input<string>;
    /**
     * Specifies the unique Amazon Resource Name (ARN) for the connector.
     */
    arn?: pulumi.Input<string>;
    /**
     * Configuration for an AS2 connector.
     */
    as2Config?: pulumi.Input<inputs.TransferConnectorAs2Config>;
    /**
     * A unique identifier for the connector.
     */
    connectorId?: pulumi.Input<string>;
    /**
     * Specifies the logging role for the connector.
     */
    loggingRole?: pulumi.Input<string>;
    /**
     * Security policy for SFTP Connector
     */
    securityPolicyName?: pulumi.Input<string>;
    /**
     * The list of egress IP addresses of this connector. These IP addresses are assigned automatically when you create the
     * connector.
     */
    serviceManagedEgressIpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Configuration for an SFTP connector.
     */
    sftpConfig?: pulumi.Input<inputs.TransferConnectorSftpConfig>;
    /**
     * Key-value pairs that can be used to group and search for connectors. Tags are metadata attached to connectors for any
     * purpose.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.TransferConnectorTag>[]>;
    /**
     * URL for Connector
     */
    url?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TransferConnector resource.
 */
export interface TransferConnectorArgs {
    /**
     * Specifies the access role for the connector.
     */
    accessRole: pulumi.Input<string>;
    /**
     * Configuration for an AS2 connector.
     */
    as2Config?: pulumi.Input<inputs.TransferConnectorAs2Config>;
    /**
     * Specifies the logging role for the connector.
     */
    loggingRole?: pulumi.Input<string>;
    /**
     * Security policy for SFTP Connector
     */
    securityPolicyName?: pulumi.Input<string>;
    /**
     * Configuration for an SFTP connector.
     */
    sftpConfig?: pulumi.Input<inputs.TransferConnectorSftpConfig>;
    /**
     * Key-value pairs that can be used to group and search for connectors. Tags are metadata attached to connectors for any
     * purpose.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.TransferConnectorTag>[]>;
    /**
     * URL for Connector
     */
    url: pulumi.Input<string>;
}

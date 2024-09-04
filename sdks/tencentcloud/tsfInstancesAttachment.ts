// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class TsfInstancesAttachment extends pulumi.CustomResource {
    /**
     * Get an existing TsfInstancesAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TsfInstancesAttachmentState, opts?: pulumi.CustomResourceOptions): TsfInstancesAttachment {
        return new TsfInstancesAttachment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/tsfInstancesAttachment:TsfInstancesAttachment';

    /**
     * Returns true if the given object is an instance of TsfInstancesAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TsfInstancesAttachment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TsfInstancesAttachment.__pulumiType;
    }

    /**
     * Cluster ID.
     */
    public readonly clusterId!: pulumi.Output<string>;
    /**
     * Image feature ID list.
     */
    public readonly featureIdLists!: pulumi.Output<string[] | undefined>;
    /**
     * Operating system image ID.
     */
    public readonly imageId!: pulumi.Output<string | undefined>;
    /**
     * Additional instance parameter information.
     */
    public readonly instanceAdvancedSettings!: pulumi.Output<outputs.TsfInstancesAttachmentInstanceAdvancedSettings | undefined>;
    /**
     * Cloud server ID.
     */
    public readonly instanceId!: pulumi.Output<string>;
    /**
     * Cloud server import mode, required for virtual machine clusters, not required for container clusters. R: Reinstall TSF
     * system image, M: Manual installation of agent.
     */
    public readonly instanceImportMode!: pulumi.Output<string | undefined>;
    /**
     * Associated key for system reinstallation.
     */
    public readonly keyId!: pulumi.Output<string | undefined>;
    /**
     * Image customization type.
     */
    public readonly osCustomizeType!: pulumi.Output<string | undefined>;
    /**
     * Operating system name.
     */
    public readonly osName!: pulumi.Output<string | undefined>;
    /**
     * Reset system password.
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * Security group.
     */
    public readonly securityGroupIds!: pulumi.Output<string[] | undefined>;
    /**
     * Security group setting.
     */
    public readonly sgId!: pulumi.Output<string | undefined>;

    /**
     * Create a TsfInstancesAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TsfInstancesAttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TsfInstancesAttachmentArgs | TsfInstancesAttachmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TsfInstancesAttachmentState | undefined;
            resourceInputs["clusterId"] = state ? state.clusterId : undefined;
            resourceInputs["featureIdLists"] = state ? state.featureIdLists : undefined;
            resourceInputs["imageId"] = state ? state.imageId : undefined;
            resourceInputs["instanceAdvancedSettings"] = state ? state.instanceAdvancedSettings : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["instanceImportMode"] = state ? state.instanceImportMode : undefined;
            resourceInputs["keyId"] = state ? state.keyId : undefined;
            resourceInputs["osCustomizeType"] = state ? state.osCustomizeType : undefined;
            resourceInputs["osName"] = state ? state.osName : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["securityGroupIds"] = state ? state.securityGroupIds : undefined;
            resourceInputs["sgId"] = state ? state.sgId : undefined;
        } else {
            const args = argsOrState as TsfInstancesAttachmentArgs | undefined;
            if ((!args || args.clusterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterId'");
            }
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            resourceInputs["clusterId"] = args ? args.clusterId : undefined;
            resourceInputs["featureIdLists"] = args ? args.featureIdLists : undefined;
            resourceInputs["imageId"] = args ? args.imageId : undefined;
            resourceInputs["instanceAdvancedSettings"] = args ? args.instanceAdvancedSettings : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["instanceImportMode"] = args ? args.instanceImportMode : undefined;
            resourceInputs["keyId"] = args ? args.keyId : undefined;
            resourceInputs["osCustomizeType"] = args ? args.osCustomizeType : undefined;
            resourceInputs["osName"] = args ? args.osName : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["securityGroupIds"] = args ? args.securityGroupIds : undefined;
            resourceInputs["sgId"] = args ? args.sgId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(TsfInstancesAttachment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TsfInstancesAttachment resources.
 */
export interface TsfInstancesAttachmentState {
    /**
     * Cluster ID.
     */
    clusterId?: pulumi.Input<string>;
    /**
     * Image feature ID list.
     */
    featureIdLists?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Operating system image ID.
     */
    imageId?: pulumi.Input<string>;
    /**
     * Additional instance parameter information.
     */
    instanceAdvancedSettings?: pulumi.Input<inputs.TsfInstancesAttachmentInstanceAdvancedSettings>;
    /**
     * Cloud server ID.
     */
    instanceId?: pulumi.Input<string>;
    /**
     * Cloud server import mode, required for virtual machine clusters, not required for container clusters. R: Reinstall TSF
     * system image, M: Manual installation of agent.
     */
    instanceImportMode?: pulumi.Input<string>;
    /**
     * Associated key for system reinstallation.
     */
    keyId?: pulumi.Input<string>;
    /**
     * Image customization type.
     */
    osCustomizeType?: pulumi.Input<string>;
    /**
     * Operating system name.
     */
    osName?: pulumi.Input<string>;
    /**
     * Reset system password.
     */
    password?: pulumi.Input<string>;
    /**
     * Security group.
     */
    securityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Security group setting.
     */
    sgId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TsfInstancesAttachment resource.
 */
export interface TsfInstancesAttachmentArgs {
    /**
     * Cluster ID.
     */
    clusterId: pulumi.Input<string>;
    /**
     * Image feature ID list.
     */
    featureIdLists?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Operating system image ID.
     */
    imageId?: pulumi.Input<string>;
    /**
     * Additional instance parameter information.
     */
    instanceAdvancedSettings?: pulumi.Input<inputs.TsfInstancesAttachmentInstanceAdvancedSettings>;
    /**
     * Cloud server ID.
     */
    instanceId: pulumi.Input<string>;
    /**
     * Cloud server import mode, required for virtual machine clusters, not required for container clusters. R: Reinstall TSF
     * system image, M: Manual installation of agent.
     */
    instanceImportMode?: pulumi.Input<string>;
    /**
     * Associated key for system reinstallation.
     */
    keyId?: pulumi.Input<string>;
    /**
     * Image customization type.
     */
    osCustomizeType?: pulumi.Input<string>;
    /**
     * Operating system name.
     */
    osName?: pulumi.Input<string>;
    /**
     * Reset system password.
     */
    password?: pulumi.Input<string>;
    /**
     * Security group.
     */
    securityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Security group setting.
     */
    sgId?: pulumi.Input<string>;
}

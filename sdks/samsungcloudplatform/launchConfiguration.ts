// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LaunchConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing LaunchConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LaunchConfigurationState, opts?: pulumi.CustomResourceOptions): LaunchConfiguration {
        return new LaunchConfiguration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'samsungcloudplatform:index/launchConfiguration:LaunchConfiguration';

    /**
     * Returns true if the given object is an instance of LaunchConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LaunchConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LaunchConfiguration.__pulumiType;
    }

    /**
     * Auto-Scaling Group ID list
     */
    public /*out*/ readonly asgIds!: pulumi.Output<string[]>;
    /**
     * Block ID
     */
    public /*out*/ readonly blockId!: pulumi.Output<string>;
    /**
     * Block Storage list
     */
    public readonly blockStorages!: pulumi.Output<outputs.LaunchConfigurationBlockStorage[]>;
    /**
     * Contract product ID
     */
    public /*out*/ readonly contractProductId!: pulumi.Output<string>;
    /**
     * The person who created the resource
     */
    public /*out*/ readonly createdBy!: pulumi.Output<string>;
    /**
     * Creation date
     */
    public /*out*/ readonly createdDt!: pulumi.Output<string>;
    /**
     * Image ID
     */
    public readonly imageId!: pulumi.Output<string>;
    /**
     * Virtual Server's initial script
     */
    public readonly initialScript!: pulumi.Output<string | undefined>;
    /**
     * Key pair ID
     */
    public readonly keyPairId!: pulumi.Output<string>;
    /**
     * Launch Configuration ID
     */
    public /*out*/ readonly lcId!: pulumi.Output<string>;
    /**
     * Launch Configuration name
     */
    public readonly lcName!: pulumi.Output<string>;
    /**
     * The person who modified the resource
     */
    public /*out*/ readonly modifiedBy!: pulumi.Output<string>;
    /**
     * Modification date
     */
    public /*out*/ readonly modifiedDt!: pulumi.Output<string>;
    /**
     * OS product ID
     */
    public /*out*/ readonly osProductId!: pulumi.Output<string>;
    /**
     * OS type
     */
    public /*out*/ readonly osType!: pulumi.Output<string>;
    /**
     * Product group ID
     */
    public /*out*/ readonly productGroupId!: pulumi.Output<string>;
    /**
     * Project ID
     */
    public /*out*/ readonly projectId!: pulumi.Output<string>;
    /**
     * Scale product ID
     */
    public /*out*/ readonly scaleProductId!: pulumi.Output<string>;
    /**
     * Server type
     */
    public readonly serverType!: pulumi.Output<string>;
    /**
     * Service zone ID
     */
    public readonly serviceZoneId!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;

    /**
     * Create a LaunchConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LaunchConfigurationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LaunchConfigurationArgs | LaunchConfigurationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LaunchConfigurationState | undefined;
            resourceInputs["asgIds"] = state ? state.asgIds : undefined;
            resourceInputs["blockId"] = state ? state.blockId : undefined;
            resourceInputs["blockStorages"] = state ? state.blockStorages : undefined;
            resourceInputs["contractProductId"] = state ? state.contractProductId : undefined;
            resourceInputs["createdBy"] = state ? state.createdBy : undefined;
            resourceInputs["createdDt"] = state ? state.createdDt : undefined;
            resourceInputs["imageId"] = state ? state.imageId : undefined;
            resourceInputs["initialScript"] = state ? state.initialScript : undefined;
            resourceInputs["keyPairId"] = state ? state.keyPairId : undefined;
            resourceInputs["lcId"] = state ? state.lcId : undefined;
            resourceInputs["lcName"] = state ? state.lcName : undefined;
            resourceInputs["modifiedBy"] = state ? state.modifiedBy : undefined;
            resourceInputs["modifiedDt"] = state ? state.modifiedDt : undefined;
            resourceInputs["osProductId"] = state ? state.osProductId : undefined;
            resourceInputs["osType"] = state ? state.osType : undefined;
            resourceInputs["productGroupId"] = state ? state.productGroupId : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["scaleProductId"] = state ? state.scaleProductId : undefined;
            resourceInputs["serverType"] = state ? state.serverType : undefined;
            resourceInputs["serviceZoneId"] = state ? state.serviceZoneId : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as LaunchConfigurationArgs | undefined;
            if ((!args || args.blockStorages === undefined) && !opts.urn) {
                throw new Error("Missing required property 'blockStorages'");
            }
            if ((!args || args.imageId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'imageId'");
            }
            if ((!args || args.keyPairId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keyPairId'");
            }
            if ((!args || args.lcName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'lcName'");
            }
            if ((!args || args.serverType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverType'");
            }
            if ((!args || args.serviceZoneId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceZoneId'");
            }
            resourceInputs["blockStorages"] = args ? args.blockStorages : undefined;
            resourceInputs["imageId"] = args ? args.imageId : undefined;
            resourceInputs["initialScript"] = args ? args.initialScript : undefined;
            resourceInputs["keyPairId"] = args ? args.keyPairId : undefined;
            resourceInputs["lcName"] = args ? args.lcName : undefined;
            resourceInputs["serverType"] = args ? args.serverType : undefined;
            resourceInputs["serviceZoneId"] = args ? args.serviceZoneId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["asgIds"] = undefined /*out*/;
            resourceInputs["blockId"] = undefined /*out*/;
            resourceInputs["contractProductId"] = undefined /*out*/;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["createdDt"] = undefined /*out*/;
            resourceInputs["lcId"] = undefined /*out*/;
            resourceInputs["modifiedBy"] = undefined /*out*/;
            resourceInputs["modifiedDt"] = undefined /*out*/;
            resourceInputs["osProductId"] = undefined /*out*/;
            resourceInputs["osType"] = undefined /*out*/;
            resourceInputs["productGroupId"] = undefined /*out*/;
            resourceInputs["projectId"] = undefined /*out*/;
            resourceInputs["scaleProductId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LaunchConfiguration.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LaunchConfiguration resources.
 */
export interface LaunchConfigurationState {
    /**
     * Auto-Scaling Group ID list
     */
    asgIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Block ID
     */
    blockId?: pulumi.Input<string>;
    /**
     * Block Storage list
     */
    blockStorages?: pulumi.Input<pulumi.Input<inputs.LaunchConfigurationBlockStorage>[]>;
    /**
     * Contract product ID
     */
    contractProductId?: pulumi.Input<string>;
    /**
     * The person who created the resource
     */
    createdBy?: pulumi.Input<string>;
    /**
     * Creation date
     */
    createdDt?: pulumi.Input<string>;
    /**
     * Image ID
     */
    imageId?: pulumi.Input<string>;
    /**
     * Virtual Server's initial script
     */
    initialScript?: pulumi.Input<string>;
    /**
     * Key pair ID
     */
    keyPairId?: pulumi.Input<string>;
    /**
     * Launch Configuration ID
     */
    lcId?: pulumi.Input<string>;
    /**
     * Launch Configuration name
     */
    lcName?: pulumi.Input<string>;
    /**
     * The person who modified the resource
     */
    modifiedBy?: pulumi.Input<string>;
    /**
     * Modification date
     */
    modifiedDt?: pulumi.Input<string>;
    /**
     * OS product ID
     */
    osProductId?: pulumi.Input<string>;
    /**
     * OS type
     */
    osType?: pulumi.Input<string>;
    /**
     * Product group ID
     */
    productGroupId?: pulumi.Input<string>;
    /**
     * Project ID
     */
    projectId?: pulumi.Input<string>;
    /**
     * Scale product ID
     */
    scaleProductId?: pulumi.Input<string>;
    /**
     * Server type
     */
    serverType?: pulumi.Input<string>;
    /**
     * Service zone ID
     */
    serviceZoneId?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a LaunchConfiguration resource.
 */
export interface LaunchConfigurationArgs {
    /**
     * Block Storage list
     */
    blockStorages: pulumi.Input<pulumi.Input<inputs.LaunchConfigurationBlockStorage>[]>;
    /**
     * Image ID
     */
    imageId: pulumi.Input<string>;
    /**
     * Virtual Server's initial script
     */
    initialScript?: pulumi.Input<string>;
    /**
     * Key pair ID
     */
    keyPairId: pulumi.Input<string>;
    /**
     * Launch Configuration name
     */
    lcName: pulumi.Input<string>;
    /**
     * Server type
     */
    serverType: pulumi.Input<string>;
    /**
     * Service zone ID
     */
    serviceZoneId: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

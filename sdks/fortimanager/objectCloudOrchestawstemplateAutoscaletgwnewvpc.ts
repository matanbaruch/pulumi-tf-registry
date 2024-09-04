// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectCloudOrchestawstemplateAutoscaletgwnewvpc extends pulumi.CustomResource {
    /**
     * Get an existing ObjectCloudOrchestawstemplateAutoscaletgwnewvpc resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectCloudOrchestawstemplateAutoscaletgwnewvpcState, opts?: pulumi.CustomResourceOptions): ObjectCloudOrchestawstemplateAutoscaletgwnewvpc {
        return new ObjectCloudOrchestawstemplateAutoscaletgwnewvpc(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectCloudOrchestawstemplateAutoscaletgwnewvpc:ObjectCloudOrchestawstemplateAutoscaletgwnewvpc';

    /**
     * Returns true if the given object is an instance of ObjectCloudOrchestawstemplateAutoscaletgwnewvpc.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectCloudOrchestawstemplateAutoscaletgwnewvpc {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectCloudOrchestawstemplateAutoscaletgwnewvpc.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly availabilityZones!: pulumi.Output<string | undefined>;
    public readonly bgpAsn!: pulumi.Output<number>;
    public readonly customAssetContainer!: pulumi.Output<string | undefined>;
    public readonly customAssetDirectory!: pulumi.Output<string | undefined>;
    public readonly customIdentifier!: pulumi.Output<string>;
    public readonly fazAutoscaleAdminPasswords!: pulumi.Output<string[]>;
    public readonly fazAutoscaleAdminUsername!: pulumi.Output<string | undefined>;
    public readonly fazCustomPrivateIpaddress!: pulumi.Output<string | undefined>;
    public readonly fazInstanceType!: pulumi.Output<string>;
    public readonly fazIntegrationOptions!: pulumi.Output<string>;
    public readonly fazVersion!: pulumi.Output<string>;
    public readonly fgtAdminCidr!: pulumi.Output<string>;
    public readonly fgtAdminPort!: pulumi.Output<number>;
    public readonly fgtInstanceType!: pulumi.Output<string>;
    public readonly fgtPskSecret!: pulumi.Output<string>;
    public readonly fgtasgCoolDown!: pulumi.Output<number>;
    public readonly fgtasgDesiredCapacityByol!: pulumi.Output<number>;
    public readonly fgtasgDesiredCapacityPayg!: pulumi.Output<number | undefined>;
    public readonly fgtasgHealthCheckGracePeriod!: pulumi.Output<number>;
    public readonly fgtasgMaxSizeByol!: pulumi.Output<number>;
    public readonly fgtasgMaxSizePayg!: pulumi.Output<number>;
    public readonly fgtasgMinSizeByol!: pulumi.Output<number>;
    public readonly fgtasgMinSizePayg!: pulumi.Output<number | undefined>;
    public readonly fgtasgScaleInThreshold!: pulumi.Output<number>;
    public readonly fgtasgScaleOutThreshold!: pulumi.Output<number>;
    public readonly fosVersion!: pulumi.Output<string>;
    public readonly getLicenseGracePeriod!: pulumi.Output<number>;
    public readonly heartbeatDelayAllowance!: pulumi.Output<number>;
    public readonly heartbeatInterval!: pulumi.Output<number>;
    public readonly heartbeatLossCount!: pulumi.Output<number>;
    public readonly keyPairName!: pulumi.Output<string | undefined>;
    public readonly lifecycleHookTimeout!: pulumi.Output<number>;
    public readonly name!: pulumi.Output<string>;
    public readonly notificationEmail!: pulumi.Output<string | undefined>;
    public readonly primaryElectionTimeout!: pulumi.Output<number>;
    public readonly publicSubnet1Cidr!: pulumi.Output<string>;
    public readonly publicSubnet2Cidr!: pulumi.Output<string>;
    public readonly resourceTagPrefix!: pulumi.Output<string | undefined>;
    public readonly s3BucketName!: pulumi.Output<string | undefined>;
    public readonly s3KeyPrefix!: pulumi.Output<string | undefined>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly syncRecoveryCount!: pulumi.Output<number>;
    public readonly terminateUnhealthyVm!: pulumi.Output<string>;
    public readonly transitGatewayId!: pulumi.Output<string | undefined>;
    public readonly transitGatewaySupportOptions!: pulumi.Output<string>;
    public readonly useCustomAssetLocation!: pulumi.Output<string>;
    public readonly vpcCidr!: pulumi.Output<string>;

    /**
     * Create a ObjectCloudOrchestawstemplateAutoscaletgwnewvpc resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ObjectCloudOrchestawstemplateAutoscaletgwnewvpcArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectCloudOrchestawstemplateAutoscaletgwnewvpcArgs | ObjectCloudOrchestawstemplateAutoscaletgwnewvpcState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectCloudOrchestawstemplateAutoscaletgwnewvpcState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["availabilityZones"] = state ? state.availabilityZones : undefined;
            resourceInputs["bgpAsn"] = state ? state.bgpAsn : undefined;
            resourceInputs["customAssetContainer"] = state ? state.customAssetContainer : undefined;
            resourceInputs["customAssetDirectory"] = state ? state.customAssetDirectory : undefined;
            resourceInputs["customIdentifier"] = state ? state.customIdentifier : undefined;
            resourceInputs["fazAutoscaleAdminPasswords"] = state ? state.fazAutoscaleAdminPasswords : undefined;
            resourceInputs["fazAutoscaleAdminUsername"] = state ? state.fazAutoscaleAdminUsername : undefined;
            resourceInputs["fazCustomPrivateIpaddress"] = state ? state.fazCustomPrivateIpaddress : undefined;
            resourceInputs["fazInstanceType"] = state ? state.fazInstanceType : undefined;
            resourceInputs["fazIntegrationOptions"] = state ? state.fazIntegrationOptions : undefined;
            resourceInputs["fazVersion"] = state ? state.fazVersion : undefined;
            resourceInputs["fgtAdminCidr"] = state ? state.fgtAdminCidr : undefined;
            resourceInputs["fgtAdminPort"] = state ? state.fgtAdminPort : undefined;
            resourceInputs["fgtInstanceType"] = state ? state.fgtInstanceType : undefined;
            resourceInputs["fgtPskSecret"] = state ? state.fgtPskSecret : undefined;
            resourceInputs["fgtasgCoolDown"] = state ? state.fgtasgCoolDown : undefined;
            resourceInputs["fgtasgDesiredCapacityByol"] = state ? state.fgtasgDesiredCapacityByol : undefined;
            resourceInputs["fgtasgDesiredCapacityPayg"] = state ? state.fgtasgDesiredCapacityPayg : undefined;
            resourceInputs["fgtasgHealthCheckGracePeriod"] = state ? state.fgtasgHealthCheckGracePeriod : undefined;
            resourceInputs["fgtasgMaxSizeByol"] = state ? state.fgtasgMaxSizeByol : undefined;
            resourceInputs["fgtasgMaxSizePayg"] = state ? state.fgtasgMaxSizePayg : undefined;
            resourceInputs["fgtasgMinSizeByol"] = state ? state.fgtasgMinSizeByol : undefined;
            resourceInputs["fgtasgMinSizePayg"] = state ? state.fgtasgMinSizePayg : undefined;
            resourceInputs["fgtasgScaleInThreshold"] = state ? state.fgtasgScaleInThreshold : undefined;
            resourceInputs["fgtasgScaleOutThreshold"] = state ? state.fgtasgScaleOutThreshold : undefined;
            resourceInputs["fosVersion"] = state ? state.fosVersion : undefined;
            resourceInputs["getLicenseGracePeriod"] = state ? state.getLicenseGracePeriod : undefined;
            resourceInputs["heartbeatDelayAllowance"] = state ? state.heartbeatDelayAllowance : undefined;
            resourceInputs["heartbeatInterval"] = state ? state.heartbeatInterval : undefined;
            resourceInputs["heartbeatLossCount"] = state ? state.heartbeatLossCount : undefined;
            resourceInputs["keyPairName"] = state ? state.keyPairName : undefined;
            resourceInputs["lifecycleHookTimeout"] = state ? state.lifecycleHookTimeout : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notificationEmail"] = state ? state.notificationEmail : undefined;
            resourceInputs["primaryElectionTimeout"] = state ? state.primaryElectionTimeout : undefined;
            resourceInputs["publicSubnet1Cidr"] = state ? state.publicSubnet1Cidr : undefined;
            resourceInputs["publicSubnet2Cidr"] = state ? state.publicSubnet2Cidr : undefined;
            resourceInputs["resourceTagPrefix"] = state ? state.resourceTagPrefix : undefined;
            resourceInputs["s3BucketName"] = state ? state.s3BucketName : undefined;
            resourceInputs["s3KeyPrefix"] = state ? state.s3KeyPrefix : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["syncRecoveryCount"] = state ? state.syncRecoveryCount : undefined;
            resourceInputs["terminateUnhealthyVm"] = state ? state.terminateUnhealthyVm : undefined;
            resourceInputs["transitGatewayId"] = state ? state.transitGatewayId : undefined;
            resourceInputs["transitGatewaySupportOptions"] = state ? state.transitGatewaySupportOptions : undefined;
            resourceInputs["useCustomAssetLocation"] = state ? state.useCustomAssetLocation : undefined;
            resourceInputs["vpcCidr"] = state ? state.vpcCidr : undefined;
        } else {
            const args = argsOrState as ObjectCloudOrchestawstemplateAutoscaletgwnewvpcArgs | undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["availabilityZones"] = args ? args.availabilityZones : undefined;
            resourceInputs["bgpAsn"] = args ? args.bgpAsn : undefined;
            resourceInputs["customAssetContainer"] = args ? args.customAssetContainer : undefined;
            resourceInputs["customAssetDirectory"] = args ? args.customAssetDirectory : undefined;
            resourceInputs["customIdentifier"] = args ? args.customIdentifier : undefined;
            resourceInputs["fazAutoscaleAdminPasswords"] = args?.fazAutoscaleAdminPasswords ? pulumi.secret(args.fazAutoscaleAdminPasswords) : undefined;
            resourceInputs["fazAutoscaleAdminUsername"] = args ? args.fazAutoscaleAdminUsername : undefined;
            resourceInputs["fazCustomPrivateIpaddress"] = args ? args.fazCustomPrivateIpaddress : undefined;
            resourceInputs["fazInstanceType"] = args ? args.fazInstanceType : undefined;
            resourceInputs["fazIntegrationOptions"] = args ? args.fazIntegrationOptions : undefined;
            resourceInputs["fazVersion"] = args ? args.fazVersion : undefined;
            resourceInputs["fgtAdminCidr"] = args ? args.fgtAdminCidr : undefined;
            resourceInputs["fgtAdminPort"] = args ? args.fgtAdminPort : undefined;
            resourceInputs["fgtInstanceType"] = args ? args.fgtInstanceType : undefined;
            resourceInputs["fgtPskSecret"] = args ? args.fgtPskSecret : undefined;
            resourceInputs["fgtasgCoolDown"] = args ? args.fgtasgCoolDown : undefined;
            resourceInputs["fgtasgDesiredCapacityByol"] = args ? args.fgtasgDesiredCapacityByol : undefined;
            resourceInputs["fgtasgDesiredCapacityPayg"] = args ? args.fgtasgDesiredCapacityPayg : undefined;
            resourceInputs["fgtasgHealthCheckGracePeriod"] = args ? args.fgtasgHealthCheckGracePeriod : undefined;
            resourceInputs["fgtasgMaxSizeByol"] = args ? args.fgtasgMaxSizeByol : undefined;
            resourceInputs["fgtasgMaxSizePayg"] = args ? args.fgtasgMaxSizePayg : undefined;
            resourceInputs["fgtasgMinSizeByol"] = args ? args.fgtasgMinSizeByol : undefined;
            resourceInputs["fgtasgMinSizePayg"] = args ? args.fgtasgMinSizePayg : undefined;
            resourceInputs["fgtasgScaleInThreshold"] = args ? args.fgtasgScaleInThreshold : undefined;
            resourceInputs["fgtasgScaleOutThreshold"] = args ? args.fgtasgScaleOutThreshold : undefined;
            resourceInputs["fosVersion"] = args ? args.fosVersion : undefined;
            resourceInputs["getLicenseGracePeriod"] = args ? args.getLicenseGracePeriod : undefined;
            resourceInputs["heartbeatDelayAllowance"] = args ? args.heartbeatDelayAllowance : undefined;
            resourceInputs["heartbeatInterval"] = args ? args.heartbeatInterval : undefined;
            resourceInputs["heartbeatLossCount"] = args ? args.heartbeatLossCount : undefined;
            resourceInputs["keyPairName"] = args ? args.keyPairName : undefined;
            resourceInputs["lifecycleHookTimeout"] = args ? args.lifecycleHookTimeout : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["notificationEmail"] = args ? args.notificationEmail : undefined;
            resourceInputs["primaryElectionTimeout"] = args ? args.primaryElectionTimeout : undefined;
            resourceInputs["publicSubnet1Cidr"] = args ? args.publicSubnet1Cidr : undefined;
            resourceInputs["publicSubnet2Cidr"] = args ? args.publicSubnet2Cidr : undefined;
            resourceInputs["resourceTagPrefix"] = args ? args.resourceTagPrefix : undefined;
            resourceInputs["s3BucketName"] = args ? args.s3BucketName : undefined;
            resourceInputs["s3KeyPrefix"] = args ? args.s3KeyPrefix : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["syncRecoveryCount"] = args ? args.syncRecoveryCount : undefined;
            resourceInputs["terminateUnhealthyVm"] = args ? args.terminateUnhealthyVm : undefined;
            resourceInputs["transitGatewayId"] = args ? args.transitGatewayId : undefined;
            resourceInputs["transitGatewaySupportOptions"] = args ? args.transitGatewaySupportOptions : undefined;
            resourceInputs["useCustomAssetLocation"] = args ? args.useCustomAssetLocation : undefined;
            resourceInputs["vpcCidr"] = args ? args.vpcCidr : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["fazAutoscaleAdminPasswords"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ObjectCloudOrchestawstemplateAutoscaletgwnewvpc.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectCloudOrchestawstemplateAutoscaletgwnewvpc resources.
 */
export interface ObjectCloudOrchestawstemplateAutoscaletgwnewvpcState {
    adom?: pulumi.Input<string>;
    availabilityZones?: pulumi.Input<string>;
    bgpAsn?: pulumi.Input<number>;
    customAssetContainer?: pulumi.Input<string>;
    customAssetDirectory?: pulumi.Input<string>;
    customIdentifier?: pulumi.Input<string>;
    fazAutoscaleAdminPasswords?: pulumi.Input<pulumi.Input<string>[]>;
    fazAutoscaleAdminUsername?: pulumi.Input<string>;
    fazCustomPrivateIpaddress?: pulumi.Input<string>;
    fazInstanceType?: pulumi.Input<string>;
    fazIntegrationOptions?: pulumi.Input<string>;
    fazVersion?: pulumi.Input<string>;
    fgtAdminCidr?: pulumi.Input<string>;
    fgtAdminPort?: pulumi.Input<number>;
    fgtInstanceType?: pulumi.Input<string>;
    fgtPskSecret?: pulumi.Input<string>;
    fgtasgCoolDown?: pulumi.Input<number>;
    fgtasgDesiredCapacityByol?: pulumi.Input<number>;
    fgtasgDesiredCapacityPayg?: pulumi.Input<number>;
    fgtasgHealthCheckGracePeriod?: pulumi.Input<number>;
    fgtasgMaxSizeByol?: pulumi.Input<number>;
    fgtasgMaxSizePayg?: pulumi.Input<number>;
    fgtasgMinSizeByol?: pulumi.Input<number>;
    fgtasgMinSizePayg?: pulumi.Input<number>;
    fgtasgScaleInThreshold?: pulumi.Input<number>;
    fgtasgScaleOutThreshold?: pulumi.Input<number>;
    fosVersion?: pulumi.Input<string>;
    getLicenseGracePeriod?: pulumi.Input<number>;
    heartbeatDelayAllowance?: pulumi.Input<number>;
    heartbeatInterval?: pulumi.Input<number>;
    heartbeatLossCount?: pulumi.Input<number>;
    keyPairName?: pulumi.Input<string>;
    lifecycleHookTimeout?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    notificationEmail?: pulumi.Input<string>;
    primaryElectionTimeout?: pulumi.Input<number>;
    publicSubnet1Cidr?: pulumi.Input<string>;
    publicSubnet2Cidr?: pulumi.Input<string>;
    resourceTagPrefix?: pulumi.Input<string>;
    s3BucketName?: pulumi.Input<string>;
    s3KeyPrefix?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    syncRecoveryCount?: pulumi.Input<number>;
    terminateUnhealthyVm?: pulumi.Input<string>;
    transitGatewayId?: pulumi.Input<string>;
    transitGatewaySupportOptions?: pulumi.Input<string>;
    useCustomAssetLocation?: pulumi.Input<string>;
    vpcCidr?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectCloudOrchestawstemplateAutoscaletgwnewvpc resource.
 */
export interface ObjectCloudOrchestawstemplateAutoscaletgwnewvpcArgs {
    adom?: pulumi.Input<string>;
    availabilityZones?: pulumi.Input<string>;
    bgpAsn?: pulumi.Input<number>;
    customAssetContainer?: pulumi.Input<string>;
    customAssetDirectory?: pulumi.Input<string>;
    customIdentifier?: pulumi.Input<string>;
    fazAutoscaleAdminPasswords?: pulumi.Input<pulumi.Input<string>[]>;
    fazAutoscaleAdminUsername?: pulumi.Input<string>;
    fazCustomPrivateIpaddress?: pulumi.Input<string>;
    fazInstanceType?: pulumi.Input<string>;
    fazIntegrationOptions?: pulumi.Input<string>;
    fazVersion?: pulumi.Input<string>;
    fgtAdminCidr?: pulumi.Input<string>;
    fgtAdminPort?: pulumi.Input<number>;
    fgtInstanceType?: pulumi.Input<string>;
    fgtPskSecret?: pulumi.Input<string>;
    fgtasgCoolDown?: pulumi.Input<number>;
    fgtasgDesiredCapacityByol?: pulumi.Input<number>;
    fgtasgDesiredCapacityPayg?: pulumi.Input<number>;
    fgtasgHealthCheckGracePeriod?: pulumi.Input<number>;
    fgtasgMaxSizeByol?: pulumi.Input<number>;
    fgtasgMaxSizePayg?: pulumi.Input<number>;
    fgtasgMinSizeByol?: pulumi.Input<number>;
    fgtasgMinSizePayg?: pulumi.Input<number>;
    fgtasgScaleInThreshold?: pulumi.Input<number>;
    fgtasgScaleOutThreshold?: pulumi.Input<number>;
    fosVersion?: pulumi.Input<string>;
    getLicenseGracePeriod?: pulumi.Input<number>;
    heartbeatDelayAllowance?: pulumi.Input<number>;
    heartbeatInterval?: pulumi.Input<number>;
    heartbeatLossCount?: pulumi.Input<number>;
    keyPairName?: pulumi.Input<string>;
    lifecycleHookTimeout?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    notificationEmail?: pulumi.Input<string>;
    primaryElectionTimeout?: pulumi.Input<number>;
    publicSubnet1Cidr?: pulumi.Input<string>;
    publicSubnet2Cidr?: pulumi.Input<string>;
    resourceTagPrefix?: pulumi.Input<string>;
    s3BucketName?: pulumi.Input<string>;
    s3KeyPrefix?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    syncRecoveryCount?: pulumi.Input<number>;
    terminateUnhealthyVm?: pulumi.Input<string>;
    transitGatewayId?: pulumi.Input<string>;
    transitGatewaySupportOptions?: pulumi.Input<string>;
    useCustomAssetLocation?: pulumi.Input<string>;
    vpcCidr?: pulumi.Input<string>;
}

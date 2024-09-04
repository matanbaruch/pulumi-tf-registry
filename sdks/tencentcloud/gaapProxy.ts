// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class GaapProxy extends pulumi.CustomResource {
    /**
     * Get an existing GaapProxy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GaapProxyState, opts?: pulumi.CustomResourceOptions): GaapProxy {
        return new GaapProxy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/gaapProxy:GaapProxy';

    /**
     * Returns true if the given object is an instance of GaapProxy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GaapProxy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GaapProxy.__pulumiType;
    }

    /**
     * Access region of the GAAP proxy. Valid value: `Hongkong`, `SoutheastAsia`, `Korea`, `Europe`, `NorthAmerica`, `Canada`,
     * `WestIndia`, `Thailand`, `Virginia`, `Japan`, `Taipei`, `SL_AZURE_NorthUAE`, `SL_AZURE_EastAUS`,
     * `SL_AZURE_NorthCentralUSA`, `SL_AZURE_SouthIndia`, `SL_AZURE_SouthBrazil`, `SL_AZURE_NorthZAF`,
     * `SL_AZURE_SoutheastAsia`, `SL_AZURE_CentralFrance`, `SL_AZURE_SouthEngland`, `SL_AZURE_EastUS`, `SL_AZURE_WestUS`,
     * `SL_AZURE_SouthCentralUSA`, `Jakarta`, `Beijing`, `Shanghai`, `Guangzhou`, `Chengdu`, `SL_AZURE_NorwayEast`,
     * `Chongqing`, `Nanjing`, `SaoPaulo`, `SL_AZURE_JapanEast`, `Changsha`, `Xian`, `Wuhan`, `Fuzhou`, `Shenyang`,
     * `Zhengzhou`, `Jinan`, `Hangzhou`, `Shijiazhuang`, `Hefei`.
     */
    public readonly accessRegion!: pulumi.Output<string>;
    /**
     * Maximum bandwidth of the GAAP proxy, unit is Mbps. Valid value: `10`, `20`, `50`, `100`, `200`, `500`, `1000`, `2000`,
     * `5000` and `10000`. To set `2000`, `5000` or `10000`, you need to apply for a whitelist from Tencent Cloud.
     */
    public readonly bandwidth!: pulumi.Output<number>;
    /**
     * Maximum concurrency of the GAAP proxy, unit is 10k. Valid value: `2`, `5`, `10`, `20`, `30`, `40`, `50`, `60`, `70`,
     * `80`, `90`, `100`, `150`, `200`, `250` and `300`. To set `150`, `200`, `250` or `300`, you need to apply for a whitelist
     * from Tencent Cloud.
     */
    public readonly concurrent!: pulumi.Output<number>;
    /**
     * Creation time of the GAAP proxy.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * Access domain of the GAAP proxy.
     */
    public /*out*/ readonly domain!: pulumi.Output<string>;
    /**
     * Indicates whether GAAP proxy is enabled, default value is `true`.
     */
    public readonly enable!: pulumi.Output<boolean | undefined>;
    /**
     * Forwarding IP of the GAAP proxy.
     */
    public /*out*/ readonly forwardIp!: pulumi.Output<string>;
    /**
     * Access IP of the GAAP proxy.
     */
    public /*out*/ readonly ip!: pulumi.Output<string>;
    /**
     * Name of the GAAP proxy, the maximum length is 30.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Network type. `normal`: regular BGP, `cn2`: boutique BGP, `triple`: triple play.
     */
    public readonly networkType!: pulumi.Output<string>;
    /**
     * ID of the project within the GAAP proxy, `0` means is default project.
     */
    public readonly projectId!: pulumi.Output<number | undefined>;
    /**
     * Region of the GAAP realserver. Valid value: `Hongkong`, `SoutheastAsia`, `Korea`, `Europe`, `NorthAmerica`, `Canada`,
     * `WestIndia`, `Thailand`, `Virginia`, `Japan`, `Taipei`, `SL_AZURE_NorthUAE`, `SL_AZURE_EastAUS`,
     * `SL_AZURE_NorthCentralUSA`, `SL_AZURE_SouthIndia`, `SL_AZURE_SouthBrazil`, `SL_AZURE_NorthZAF`,
     * `SL_AZURE_SoutheastAsia`, `SL_AZURE_CentralFrance`, `SL_AZURE_SouthEngland`, `SL_AZURE_EastUS`, `SL_AZURE_WestUS`,
     * `SL_AZURE_SouthCentralUSA`, `Jakarta`, `Beijing`, `Shanghai`, `Guangzhou`, `Chengdu`, `SL_AZURE_NorwayEast`,
     * `Chongqing`, `Nanjing`, `SaoPaulo`, `SL_AZURE_JapanEast`.
     */
    public readonly realserverRegion!: pulumi.Output<string>;
    /**
     * Indicates whether GAAP proxy can scalable.
     */
    public /*out*/ readonly scalable!: pulumi.Output<boolean>;
    /**
     * Status of the GAAP proxy.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Supported protocols of the GAAP proxy.
     */
    public /*out*/ readonly supportProtocols!: pulumi.Output<string[]>;
    /**
     * Tags of the GAAP proxy. Tags that do not exist are not created automatically.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;

    /**
     * Create a GaapProxy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GaapProxyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GaapProxyArgs | GaapProxyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GaapProxyState | undefined;
            resourceInputs["accessRegion"] = state ? state.accessRegion : undefined;
            resourceInputs["bandwidth"] = state ? state.bandwidth : undefined;
            resourceInputs["concurrent"] = state ? state.concurrent : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["domain"] = state ? state.domain : undefined;
            resourceInputs["enable"] = state ? state.enable : undefined;
            resourceInputs["forwardIp"] = state ? state.forwardIp : undefined;
            resourceInputs["ip"] = state ? state.ip : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networkType"] = state ? state.networkType : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["realserverRegion"] = state ? state.realserverRegion : undefined;
            resourceInputs["scalable"] = state ? state.scalable : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["supportProtocols"] = state ? state.supportProtocols : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as GaapProxyArgs | undefined;
            if ((!args || args.accessRegion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessRegion'");
            }
            if ((!args || args.bandwidth === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bandwidth'");
            }
            if ((!args || args.concurrent === undefined) && !opts.urn) {
                throw new Error("Missing required property 'concurrent'");
            }
            if ((!args || args.realserverRegion === undefined) && !opts.urn) {
                throw new Error("Missing required property 'realserverRegion'");
            }
            resourceInputs["accessRegion"] = args ? args.accessRegion : undefined;
            resourceInputs["bandwidth"] = args ? args.bandwidth : undefined;
            resourceInputs["concurrent"] = args ? args.concurrent : undefined;
            resourceInputs["enable"] = args ? args.enable : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkType"] = args ? args.networkType : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["realserverRegion"] = args ? args.realserverRegion : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["domain"] = undefined /*out*/;
            resourceInputs["forwardIp"] = undefined /*out*/;
            resourceInputs["ip"] = undefined /*out*/;
            resourceInputs["scalable"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["supportProtocols"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GaapProxy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GaapProxy resources.
 */
export interface GaapProxyState {
    /**
     * Access region of the GAAP proxy. Valid value: `Hongkong`, `SoutheastAsia`, `Korea`, `Europe`, `NorthAmerica`, `Canada`,
     * `WestIndia`, `Thailand`, `Virginia`, `Japan`, `Taipei`, `SL_AZURE_NorthUAE`, `SL_AZURE_EastAUS`,
     * `SL_AZURE_NorthCentralUSA`, `SL_AZURE_SouthIndia`, `SL_AZURE_SouthBrazil`, `SL_AZURE_NorthZAF`,
     * `SL_AZURE_SoutheastAsia`, `SL_AZURE_CentralFrance`, `SL_AZURE_SouthEngland`, `SL_AZURE_EastUS`, `SL_AZURE_WestUS`,
     * `SL_AZURE_SouthCentralUSA`, `Jakarta`, `Beijing`, `Shanghai`, `Guangzhou`, `Chengdu`, `SL_AZURE_NorwayEast`,
     * `Chongqing`, `Nanjing`, `SaoPaulo`, `SL_AZURE_JapanEast`, `Changsha`, `Xian`, `Wuhan`, `Fuzhou`, `Shenyang`,
     * `Zhengzhou`, `Jinan`, `Hangzhou`, `Shijiazhuang`, `Hefei`.
     */
    accessRegion?: pulumi.Input<string>;
    /**
     * Maximum bandwidth of the GAAP proxy, unit is Mbps. Valid value: `10`, `20`, `50`, `100`, `200`, `500`, `1000`, `2000`,
     * `5000` and `10000`. To set `2000`, `5000` or `10000`, you need to apply for a whitelist from Tencent Cloud.
     */
    bandwidth?: pulumi.Input<number>;
    /**
     * Maximum concurrency of the GAAP proxy, unit is 10k. Valid value: `2`, `5`, `10`, `20`, `30`, `40`, `50`, `60`, `70`,
     * `80`, `90`, `100`, `150`, `200`, `250` and `300`. To set `150`, `200`, `250` or `300`, you need to apply for a whitelist
     * from Tencent Cloud.
     */
    concurrent?: pulumi.Input<number>;
    /**
     * Creation time of the GAAP proxy.
     */
    createTime?: pulumi.Input<string>;
    /**
     * Access domain of the GAAP proxy.
     */
    domain?: pulumi.Input<string>;
    /**
     * Indicates whether GAAP proxy is enabled, default value is `true`.
     */
    enable?: pulumi.Input<boolean>;
    /**
     * Forwarding IP of the GAAP proxy.
     */
    forwardIp?: pulumi.Input<string>;
    /**
     * Access IP of the GAAP proxy.
     */
    ip?: pulumi.Input<string>;
    /**
     * Name of the GAAP proxy, the maximum length is 30.
     */
    name?: pulumi.Input<string>;
    /**
     * Network type. `normal`: regular BGP, `cn2`: boutique BGP, `triple`: triple play.
     */
    networkType?: pulumi.Input<string>;
    /**
     * ID of the project within the GAAP proxy, `0` means is default project.
     */
    projectId?: pulumi.Input<number>;
    /**
     * Region of the GAAP realserver. Valid value: `Hongkong`, `SoutheastAsia`, `Korea`, `Europe`, `NorthAmerica`, `Canada`,
     * `WestIndia`, `Thailand`, `Virginia`, `Japan`, `Taipei`, `SL_AZURE_NorthUAE`, `SL_AZURE_EastAUS`,
     * `SL_AZURE_NorthCentralUSA`, `SL_AZURE_SouthIndia`, `SL_AZURE_SouthBrazil`, `SL_AZURE_NorthZAF`,
     * `SL_AZURE_SoutheastAsia`, `SL_AZURE_CentralFrance`, `SL_AZURE_SouthEngland`, `SL_AZURE_EastUS`, `SL_AZURE_WestUS`,
     * `SL_AZURE_SouthCentralUSA`, `Jakarta`, `Beijing`, `Shanghai`, `Guangzhou`, `Chengdu`, `SL_AZURE_NorwayEast`,
     * `Chongqing`, `Nanjing`, `SaoPaulo`, `SL_AZURE_JapanEast`.
     */
    realserverRegion?: pulumi.Input<string>;
    /**
     * Indicates whether GAAP proxy can scalable.
     */
    scalable?: pulumi.Input<boolean>;
    /**
     * Status of the GAAP proxy.
     */
    status?: pulumi.Input<string>;
    /**
     * Supported protocols of the GAAP proxy.
     */
    supportProtocols?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Tags of the GAAP proxy. Tags that do not exist are not created automatically.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a GaapProxy resource.
 */
export interface GaapProxyArgs {
    /**
     * Access region of the GAAP proxy. Valid value: `Hongkong`, `SoutheastAsia`, `Korea`, `Europe`, `NorthAmerica`, `Canada`,
     * `WestIndia`, `Thailand`, `Virginia`, `Japan`, `Taipei`, `SL_AZURE_NorthUAE`, `SL_AZURE_EastAUS`,
     * `SL_AZURE_NorthCentralUSA`, `SL_AZURE_SouthIndia`, `SL_AZURE_SouthBrazil`, `SL_AZURE_NorthZAF`,
     * `SL_AZURE_SoutheastAsia`, `SL_AZURE_CentralFrance`, `SL_AZURE_SouthEngland`, `SL_AZURE_EastUS`, `SL_AZURE_WestUS`,
     * `SL_AZURE_SouthCentralUSA`, `Jakarta`, `Beijing`, `Shanghai`, `Guangzhou`, `Chengdu`, `SL_AZURE_NorwayEast`,
     * `Chongqing`, `Nanjing`, `SaoPaulo`, `SL_AZURE_JapanEast`, `Changsha`, `Xian`, `Wuhan`, `Fuzhou`, `Shenyang`,
     * `Zhengzhou`, `Jinan`, `Hangzhou`, `Shijiazhuang`, `Hefei`.
     */
    accessRegion: pulumi.Input<string>;
    /**
     * Maximum bandwidth of the GAAP proxy, unit is Mbps. Valid value: `10`, `20`, `50`, `100`, `200`, `500`, `1000`, `2000`,
     * `5000` and `10000`. To set `2000`, `5000` or `10000`, you need to apply for a whitelist from Tencent Cloud.
     */
    bandwidth: pulumi.Input<number>;
    /**
     * Maximum concurrency of the GAAP proxy, unit is 10k. Valid value: `2`, `5`, `10`, `20`, `30`, `40`, `50`, `60`, `70`,
     * `80`, `90`, `100`, `150`, `200`, `250` and `300`. To set `150`, `200`, `250` or `300`, you need to apply for a whitelist
     * from Tencent Cloud.
     */
    concurrent: pulumi.Input<number>;
    /**
     * Indicates whether GAAP proxy is enabled, default value is `true`.
     */
    enable?: pulumi.Input<boolean>;
    /**
     * Name of the GAAP proxy, the maximum length is 30.
     */
    name?: pulumi.Input<string>;
    /**
     * Network type. `normal`: regular BGP, `cn2`: boutique BGP, `triple`: triple play.
     */
    networkType?: pulumi.Input<string>;
    /**
     * ID of the project within the GAAP proxy, `0` means is default project.
     */
    projectId?: pulumi.Input<number>;
    /**
     * Region of the GAAP realserver. Valid value: `Hongkong`, `SoutheastAsia`, `Korea`, `Europe`, `NorthAmerica`, `Canada`,
     * `WestIndia`, `Thailand`, `Virginia`, `Japan`, `Taipei`, `SL_AZURE_NorthUAE`, `SL_AZURE_EastAUS`,
     * `SL_AZURE_NorthCentralUSA`, `SL_AZURE_SouthIndia`, `SL_AZURE_SouthBrazil`, `SL_AZURE_NorthZAF`,
     * `SL_AZURE_SoutheastAsia`, `SL_AZURE_CentralFrance`, `SL_AZURE_SouthEngland`, `SL_AZURE_EastUS`, `SL_AZURE_WestUS`,
     * `SL_AZURE_SouthCentralUSA`, `Jakarta`, `Beijing`, `Shanghai`, `Guangzhou`, `Chengdu`, `SL_AZURE_NorwayEast`,
     * `Chongqing`, `Nanjing`, `SaoPaulo`, `SL_AZURE_JapanEast`.
     */
    realserverRegion: pulumi.Input<string>;
    /**
     * Tags of the GAAP proxy. Tags that do not exist are not created automatically.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Vrf extends pulumi.CustomResource {
    /**
     * Get an existing Vrf resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VrfState, opts?: pulumi.CustomResourceOptions): Vrf {
        return new Vrf(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dcnm:index/vrf:Vrf';

    /**
     * Returns true if the given object is an instance of Vrf.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Vrf {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Vrf.__pulumiType;
    }

    public readonly advertiseDefaultRoute!: pulumi.Output<string | undefined>;
    public readonly advertiseHostRoute!: pulumi.Output<string>;
    public readonly attachments!: pulumi.Output<outputs.VrfAttachment[] | undefined>;
    public readonly deploy!: pulumi.Output<boolean | undefined>;
    public readonly deployTimeout!: pulumi.Output<number | undefined>;
    public readonly description!: pulumi.Output<string>;
    public readonly extensionTemplate!: pulumi.Output<string | undefined>;
    public readonly fabricName!: pulumi.Output<string>;
    public readonly intfDescription!: pulumi.Output<string>;
    public readonly ipv6LinkLocalFlag!: pulumi.Output<string | undefined>;
    public readonly loopbackId!: pulumi.Output<number>;
    public readonly maxBgpPath!: pulumi.Output<number | undefined>;
    public readonly maxIbgpPath!: pulumi.Output<number | undefined>;
    public readonly mtu!: pulumi.Output<number | undefined>;
    public readonly mutlicastAddress!: pulumi.Output<string>;
    public readonly mutlicastGroup!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly rpAddress!: pulumi.Output<string>;
    public readonly rpExternalFlag!: pulumi.Output<string>;
    public readonly segmentId!: pulumi.Output<string>;
    public readonly serviceTemplate!: pulumi.Output<string>;
    public readonly source!: pulumi.Output<string>;
    public readonly staticDefaultRoute!: pulumi.Output<string | undefined>;
    public readonly tag!: pulumi.Output<string | undefined>;
    public readonly template!: pulumi.Output<string | undefined>;
    public readonly trmBgwMsiteFlag!: pulumi.Output<string>;
    public readonly trmEnable!: pulumi.Output<string>;
    public readonly vlanId!: pulumi.Output<number>;
    public readonly vlanName!: pulumi.Output<string>;

    /**
     * Create a Vrf resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VrfArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VrfArgs | VrfState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VrfState | undefined;
            resourceInputs["advertiseDefaultRoute"] = state ? state.advertiseDefaultRoute : undefined;
            resourceInputs["advertiseHostRoute"] = state ? state.advertiseHostRoute : undefined;
            resourceInputs["attachments"] = state ? state.attachments : undefined;
            resourceInputs["deploy"] = state ? state.deploy : undefined;
            resourceInputs["deployTimeout"] = state ? state.deployTimeout : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["extensionTemplate"] = state ? state.extensionTemplate : undefined;
            resourceInputs["fabricName"] = state ? state.fabricName : undefined;
            resourceInputs["intfDescription"] = state ? state.intfDescription : undefined;
            resourceInputs["ipv6LinkLocalFlag"] = state ? state.ipv6LinkLocalFlag : undefined;
            resourceInputs["loopbackId"] = state ? state.loopbackId : undefined;
            resourceInputs["maxBgpPath"] = state ? state.maxBgpPath : undefined;
            resourceInputs["maxIbgpPath"] = state ? state.maxIbgpPath : undefined;
            resourceInputs["mtu"] = state ? state.mtu : undefined;
            resourceInputs["mutlicastAddress"] = state ? state.mutlicastAddress : undefined;
            resourceInputs["mutlicastGroup"] = state ? state.mutlicastGroup : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["rpAddress"] = state ? state.rpAddress : undefined;
            resourceInputs["rpExternalFlag"] = state ? state.rpExternalFlag : undefined;
            resourceInputs["segmentId"] = state ? state.segmentId : undefined;
            resourceInputs["serviceTemplate"] = state ? state.serviceTemplate : undefined;
            resourceInputs["source"] = state ? state.source : undefined;
            resourceInputs["staticDefaultRoute"] = state ? state.staticDefaultRoute : undefined;
            resourceInputs["tag"] = state ? state.tag : undefined;
            resourceInputs["template"] = state ? state.template : undefined;
            resourceInputs["trmBgwMsiteFlag"] = state ? state.trmBgwMsiteFlag : undefined;
            resourceInputs["trmEnable"] = state ? state.trmEnable : undefined;
            resourceInputs["vlanId"] = state ? state.vlanId : undefined;
            resourceInputs["vlanName"] = state ? state.vlanName : undefined;
        } else {
            const args = argsOrState as VrfArgs | undefined;
            if ((!args || args.fabricName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fabricName'");
            }
            resourceInputs["advertiseDefaultRoute"] = args ? args.advertiseDefaultRoute : undefined;
            resourceInputs["advertiseHostRoute"] = args ? args.advertiseHostRoute : undefined;
            resourceInputs["attachments"] = args ? args.attachments : undefined;
            resourceInputs["deploy"] = args ? args.deploy : undefined;
            resourceInputs["deployTimeout"] = args ? args.deployTimeout : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["extensionTemplate"] = args ? args.extensionTemplate : undefined;
            resourceInputs["fabricName"] = args ? args.fabricName : undefined;
            resourceInputs["intfDescription"] = args ? args.intfDescription : undefined;
            resourceInputs["ipv6LinkLocalFlag"] = args ? args.ipv6LinkLocalFlag : undefined;
            resourceInputs["loopbackId"] = args ? args.loopbackId : undefined;
            resourceInputs["maxBgpPath"] = args ? args.maxBgpPath : undefined;
            resourceInputs["maxIbgpPath"] = args ? args.maxIbgpPath : undefined;
            resourceInputs["mtu"] = args ? args.mtu : undefined;
            resourceInputs["mutlicastAddress"] = args ? args.mutlicastAddress : undefined;
            resourceInputs["mutlicastGroup"] = args ? args.mutlicastGroup : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["rpAddress"] = args ? args.rpAddress : undefined;
            resourceInputs["rpExternalFlag"] = args ? args.rpExternalFlag : undefined;
            resourceInputs["segmentId"] = args ? args.segmentId : undefined;
            resourceInputs["serviceTemplate"] = args ? args.serviceTemplate : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["staticDefaultRoute"] = args ? args.staticDefaultRoute : undefined;
            resourceInputs["tag"] = args ? args.tag : undefined;
            resourceInputs["template"] = args ? args.template : undefined;
            resourceInputs["trmBgwMsiteFlag"] = args ? args.trmBgwMsiteFlag : undefined;
            resourceInputs["trmEnable"] = args ? args.trmEnable : undefined;
            resourceInputs["vlanId"] = args ? args.vlanId : undefined;
            resourceInputs["vlanName"] = args ? args.vlanName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Vrf.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Vrf resources.
 */
export interface VrfState {
    advertiseDefaultRoute?: pulumi.Input<string>;
    advertiseHostRoute?: pulumi.Input<string>;
    attachments?: pulumi.Input<pulumi.Input<inputs.VrfAttachment>[]>;
    deploy?: pulumi.Input<boolean>;
    deployTimeout?: pulumi.Input<number>;
    description?: pulumi.Input<string>;
    extensionTemplate?: pulumi.Input<string>;
    fabricName?: pulumi.Input<string>;
    intfDescription?: pulumi.Input<string>;
    ipv6LinkLocalFlag?: pulumi.Input<string>;
    loopbackId?: pulumi.Input<number>;
    maxBgpPath?: pulumi.Input<number>;
    maxIbgpPath?: pulumi.Input<number>;
    mtu?: pulumi.Input<number>;
    mutlicastAddress?: pulumi.Input<string>;
    mutlicastGroup?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    rpAddress?: pulumi.Input<string>;
    rpExternalFlag?: pulumi.Input<string>;
    segmentId?: pulumi.Input<string>;
    serviceTemplate?: pulumi.Input<string>;
    source?: pulumi.Input<string>;
    staticDefaultRoute?: pulumi.Input<string>;
    tag?: pulumi.Input<string>;
    template?: pulumi.Input<string>;
    trmBgwMsiteFlag?: pulumi.Input<string>;
    trmEnable?: pulumi.Input<string>;
    vlanId?: pulumi.Input<number>;
    vlanName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Vrf resource.
 */
export interface VrfArgs {
    advertiseDefaultRoute?: pulumi.Input<string>;
    advertiseHostRoute?: pulumi.Input<string>;
    attachments?: pulumi.Input<pulumi.Input<inputs.VrfAttachment>[]>;
    deploy?: pulumi.Input<boolean>;
    deployTimeout?: pulumi.Input<number>;
    description?: pulumi.Input<string>;
    extensionTemplate?: pulumi.Input<string>;
    fabricName: pulumi.Input<string>;
    intfDescription?: pulumi.Input<string>;
    ipv6LinkLocalFlag?: pulumi.Input<string>;
    loopbackId?: pulumi.Input<number>;
    maxBgpPath?: pulumi.Input<number>;
    maxIbgpPath?: pulumi.Input<number>;
    mtu?: pulumi.Input<number>;
    mutlicastAddress?: pulumi.Input<string>;
    mutlicastGroup?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    rpAddress?: pulumi.Input<string>;
    rpExternalFlag?: pulumi.Input<string>;
    segmentId?: pulumi.Input<string>;
    serviceTemplate?: pulumi.Input<string>;
    source?: pulumi.Input<string>;
    staticDefaultRoute?: pulumi.Input<string>;
    tag?: pulumi.Input<string>;
    template?: pulumi.Input<string>;
    trmBgwMsiteFlag?: pulumi.Input<string>;
    trmEnable?: pulumi.Input<string>;
    vlanId?: pulumi.Input<number>;
    vlanName?: pulumi.Input<string>;
}

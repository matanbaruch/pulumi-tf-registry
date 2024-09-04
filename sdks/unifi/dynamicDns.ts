// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DynamicDns extends pulumi.CustomResource {
    /**
     * Get an existing DynamicDns resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DynamicDnsState, opts?: pulumi.CustomResourceOptions): DynamicDns {
        return new DynamicDns(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'unifi:index/dynamicDns:DynamicDns';

    /**
     * Returns true if the given object is an instance of DynamicDns.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DynamicDns {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DynamicDns.__pulumiType;
    }

    /**
     * The host name to update in the dynamic DNS service.
     */
    public readonly hostName!: pulumi.Output<string>;
    /**
     * The interface for the dynamic DNS. Can be `wan` or `wan2`. Defaults to `wan`.
     */
    public readonly interface!: pulumi.Output<string | undefined>;
    /**
     * The server for the dynamic DNS service.
     */
    public readonly login!: pulumi.Output<string | undefined>;
    /**
     * The server for the dynamic DNS service.
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * The server for the dynamic DNS service.
     */
    public readonly server!: pulumi.Output<string | undefined>;
    /**
     * The Dynamic DNS service provider, various values are supported (for example `dyndns`, etc.).
     */
    public readonly service!: pulumi.Output<string>;
    /**
     * The name of the site to associate the dynamic DNS with.
     */
    public readonly site!: pulumi.Output<string>;

    /**
     * Create a DynamicDns resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DynamicDnsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DynamicDnsArgs | DynamicDnsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DynamicDnsState | undefined;
            resourceInputs["hostName"] = state ? state.hostName : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["login"] = state ? state.login : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["server"] = state ? state.server : undefined;
            resourceInputs["service"] = state ? state.service : undefined;
            resourceInputs["site"] = state ? state.site : undefined;
        } else {
            const args = argsOrState as DynamicDnsArgs | undefined;
            if ((!args || args.hostName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostName'");
            }
            if ((!args || args.service === undefined) && !opts.urn) {
                throw new Error("Missing required property 'service'");
            }
            resourceInputs["hostName"] = args ? args.hostName : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["login"] = args ? args.login : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["server"] = args ? args.server : undefined;
            resourceInputs["service"] = args ? args.service : undefined;
            resourceInputs["site"] = args ? args.site : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(DynamicDns.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DynamicDns resources.
 */
export interface DynamicDnsState {
    /**
     * The host name to update in the dynamic DNS service.
     */
    hostName?: pulumi.Input<string>;
    /**
     * The interface for the dynamic DNS. Can be `wan` or `wan2`. Defaults to `wan`.
     */
    interface?: pulumi.Input<string>;
    /**
     * The server for the dynamic DNS service.
     */
    login?: pulumi.Input<string>;
    /**
     * The server for the dynamic DNS service.
     */
    password?: pulumi.Input<string>;
    /**
     * The server for the dynamic DNS service.
     */
    server?: pulumi.Input<string>;
    /**
     * The Dynamic DNS service provider, various values are supported (for example `dyndns`, etc.).
     */
    service?: pulumi.Input<string>;
    /**
     * The name of the site to associate the dynamic DNS with.
     */
    site?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DynamicDns resource.
 */
export interface DynamicDnsArgs {
    /**
     * The host name to update in the dynamic DNS service.
     */
    hostName: pulumi.Input<string>;
    /**
     * The interface for the dynamic DNS. Can be `wan` or `wan2`. Defaults to `wan`.
     */
    interface?: pulumi.Input<string>;
    /**
     * The server for the dynamic DNS service.
     */
    login?: pulumi.Input<string>;
    /**
     * The server for the dynamic DNS service.
     */
    password?: pulumi.Input<string>;
    /**
     * The server for the dynamic DNS service.
     */
    server?: pulumi.Input<string>;
    /**
     * The Dynamic DNS service provider, various values are supported (for example `dyndns`, etc.).
     */
    service: pulumi.Input<string>;
    /**
     * The name of the site to associate the dynamic DNS with.
     */
    site?: pulumi.Input<string>;
}

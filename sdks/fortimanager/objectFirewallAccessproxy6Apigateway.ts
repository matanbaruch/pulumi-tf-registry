// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ObjectFirewallAccessproxy6Apigateway extends pulumi.CustomResource {
    /**
     * Get an existing ObjectFirewallAccessproxy6Apigateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectFirewallAccessproxy6ApigatewayState, opts?: pulumi.CustomResourceOptions): ObjectFirewallAccessproxy6Apigateway {
        return new ObjectFirewallAccessproxy6Apigateway(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectFirewallAccessproxy6Apigateway:ObjectFirewallAccessproxy6Apigateway';

    /**
     * Returns true if the given object is an instance of ObjectFirewallAccessproxy6Apigateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectFirewallAccessproxy6Apigateway {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectFirewallAccessproxy6Apigateway.__pulumiType;
    }

    public readonly accessProxy6!: pulumi.Output<string>;
    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly applications!: pulumi.Output<string[]>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly fosid!: pulumi.Output<number>;
    public readonly h2Support!: pulumi.Output<string>;
    public readonly h3Support!: pulumi.Output<string>;
    public readonly httpCookieAge!: pulumi.Output<number>;
    public readonly httpCookieDomain!: pulumi.Output<string | undefined>;
    public readonly httpCookieDomainFromHost!: pulumi.Output<string>;
    public readonly httpCookieGeneration!: pulumi.Output<number>;
    public readonly httpCookiePath!: pulumi.Output<string | undefined>;
    public readonly httpCookieShare!: pulumi.Output<string>;
    public readonly httpsCookieSecure!: pulumi.Output<string>;
    public readonly ldbMethod!: pulumi.Output<string>;
    public readonly persistence!: pulumi.Output<string>;
    public readonly quic!: pulumi.Output<outputs.ObjectFirewallAccessproxy6ApigatewayQuic | undefined>;
    public readonly realservers!: pulumi.Output<outputs.ObjectFirewallAccessproxy6ApigatewayRealserver[] | undefined>;
    public readonly samlRedirect!: pulumi.Output<string>;
    public readonly samlServer!: pulumi.Output<string | undefined>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly service!: pulumi.Output<string>;
    public readonly sslAlgorithm!: pulumi.Output<string>;
    public readonly sslCipherSuites!: pulumi.Output<outputs.ObjectFirewallAccessproxy6ApigatewaySslCipherSuite[] | undefined>;
    public readonly sslDhBits!: pulumi.Output<string>;
    public readonly sslMaxVersion!: pulumi.Output<string | undefined>;
    public readonly sslMinVersion!: pulumi.Output<string | undefined>;
    public readonly sslRenegotiation!: pulumi.Output<string>;
    public readonly sslVpnWebPortal!: pulumi.Output<string | undefined>;
    public readonly urlMap!: pulumi.Output<string>;
    public readonly urlMapType!: pulumi.Output<string>;
    public readonly virtualHost!: pulumi.Output<string | undefined>;

    /**
     * Create a ObjectFirewallAccessproxy6Apigateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectFirewallAccessproxy6ApigatewayArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectFirewallAccessproxy6ApigatewayArgs | ObjectFirewallAccessproxy6ApigatewayState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectFirewallAccessproxy6ApigatewayState | undefined;
            resourceInputs["accessProxy6"] = state ? state.accessProxy6 : undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["applications"] = state ? state.applications : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["h2Support"] = state ? state.h2Support : undefined;
            resourceInputs["h3Support"] = state ? state.h3Support : undefined;
            resourceInputs["httpCookieAge"] = state ? state.httpCookieAge : undefined;
            resourceInputs["httpCookieDomain"] = state ? state.httpCookieDomain : undefined;
            resourceInputs["httpCookieDomainFromHost"] = state ? state.httpCookieDomainFromHost : undefined;
            resourceInputs["httpCookieGeneration"] = state ? state.httpCookieGeneration : undefined;
            resourceInputs["httpCookiePath"] = state ? state.httpCookiePath : undefined;
            resourceInputs["httpCookieShare"] = state ? state.httpCookieShare : undefined;
            resourceInputs["httpsCookieSecure"] = state ? state.httpsCookieSecure : undefined;
            resourceInputs["ldbMethod"] = state ? state.ldbMethod : undefined;
            resourceInputs["persistence"] = state ? state.persistence : undefined;
            resourceInputs["quic"] = state ? state.quic : undefined;
            resourceInputs["realservers"] = state ? state.realservers : undefined;
            resourceInputs["samlRedirect"] = state ? state.samlRedirect : undefined;
            resourceInputs["samlServer"] = state ? state.samlServer : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["service"] = state ? state.service : undefined;
            resourceInputs["sslAlgorithm"] = state ? state.sslAlgorithm : undefined;
            resourceInputs["sslCipherSuites"] = state ? state.sslCipherSuites : undefined;
            resourceInputs["sslDhBits"] = state ? state.sslDhBits : undefined;
            resourceInputs["sslMaxVersion"] = state ? state.sslMaxVersion : undefined;
            resourceInputs["sslMinVersion"] = state ? state.sslMinVersion : undefined;
            resourceInputs["sslRenegotiation"] = state ? state.sslRenegotiation : undefined;
            resourceInputs["sslVpnWebPortal"] = state ? state.sslVpnWebPortal : undefined;
            resourceInputs["urlMap"] = state ? state.urlMap : undefined;
            resourceInputs["urlMapType"] = state ? state.urlMapType : undefined;
            resourceInputs["virtualHost"] = state ? state.virtualHost : undefined;
        } else {
            const args = argsOrState as ObjectFirewallAccessproxy6ApigatewayArgs | undefined;
            if ((!args || args.accessProxy6 === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessProxy6'");
            }
            resourceInputs["accessProxy6"] = args ? args.accessProxy6 : undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["applications"] = args ? args.applications : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["h2Support"] = args ? args.h2Support : undefined;
            resourceInputs["h3Support"] = args ? args.h3Support : undefined;
            resourceInputs["httpCookieAge"] = args ? args.httpCookieAge : undefined;
            resourceInputs["httpCookieDomain"] = args ? args.httpCookieDomain : undefined;
            resourceInputs["httpCookieDomainFromHost"] = args ? args.httpCookieDomainFromHost : undefined;
            resourceInputs["httpCookieGeneration"] = args ? args.httpCookieGeneration : undefined;
            resourceInputs["httpCookiePath"] = args ? args.httpCookiePath : undefined;
            resourceInputs["httpCookieShare"] = args ? args.httpCookieShare : undefined;
            resourceInputs["httpsCookieSecure"] = args ? args.httpsCookieSecure : undefined;
            resourceInputs["ldbMethod"] = args ? args.ldbMethod : undefined;
            resourceInputs["persistence"] = args ? args.persistence : undefined;
            resourceInputs["quic"] = args ? args.quic : undefined;
            resourceInputs["realservers"] = args ? args.realservers : undefined;
            resourceInputs["samlRedirect"] = args ? args.samlRedirect : undefined;
            resourceInputs["samlServer"] = args ? args.samlServer : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["service"] = args ? args.service : undefined;
            resourceInputs["sslAlgorithm"] = args ? args.sslAlgorithm : undefined;
            resourceInputs["sslCipherSuites"] = args ? args.sslCipherSuites : undefined;
            resourceInputs["sslDhBits"] = args ? args.sslDhBits : undefined;
            resourceInputs["sslMaxVersion"] = args ? args.sslMaxVersion : undefined;
            resourceInputs["sslMinVersion"] = args ? args.sslMinVersion : undefined;
            resourceInputs["sslRenegotiation"] = args ? args.sslRenegotiation : undefined;
            resourceInputs["sslVpnWebPortal"] = args ? args.sslVpnWebPortal : undefined;
            resourceInputs["urlMap"] = args ? args.urlMap : undefined;
            resourceInputs["urlMapType"] = args ? args.urlMapType : undefined;
            resourceInputs["virtualHost"] = args ? args.virtualHost : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectFirewallAccessproxy6Apigateway.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectFirewallAccessproxy6Apigateway resources.
 */
export interface ObjectFirewallAccessproxy6ApigatewayState {
    accessProxy6?: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    applications?: pulumi.Input<pulumi.Input<string>[]>;
    dynamicSortSubtable?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    h2Support?: pulumi.Input<string>;
    h3Support?: pulumi.Input<string>;
    httpCookieAge?: pulumi.Input<number>;
    httpCookieDomain?: pulumi.Input<string>;
    httpCookieDomainFromHost?: pulumi.Input<string>;
    httpCookieGeneration?: pulumi.Input<number>;
    httpCookiePath?: pulumi.Input<string>;
    httpCookieShare?: pulumi.Input<string>;
    httpsCookieSecure?: pulumi.Input<string>;
    ldbMethod?: pulumi.Input<string>;
    persistence?: pulumi.Input<string>;
    quic?: pulumi.Input<inputs.ObjectFirewallAccessproxy6ApigatewayQuic>;
    realservers?: pulumi.Input<pulumi.Input<inputs.ObjectFirewallAccessproxy6ApigatewayRealserver>[]>;
    samlRedirect?: pulumi.Input<string>;
    samlServer?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    service?: pulumi.Input<string>;
    sslAlgorithm?: pulumi.Input<string>;
    sslCipherSuites?: pulumi.Input<pulumi.Input<inputs.ObjectFirewallAccessproxy6ApigatewaySslCipherSuite>[]>;
    sslDhBits?: pulumi.Input<string>;
    sslMaxVersion?: pulumi.Input<string>;
    sslMinVersion?: pulumi.Input<string>;
    sslRenegotiation?: pulumi.Input<string>;
    sslVpnWebPortal?: pulumi.Input<string>;
    urlMap?: pulumi.Input<string>;
    urlMapType?: pulumi.Input<string>;
    virtualHost?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectFirewallAccessproxy6Apigateway resource.
 */
export interface ObjectFirewallAccessproxy6ApigatewayArgs {
    accessProxy6: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    applications?: pulumi.Input<pulumi.Input<string>[]>;
    dynamicSortSubtable?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    h2Support?: pulumi.Input<string>;
    h3Support?: pulumi.Input<string>;
    httpCookieAge?: pulumi.Input<number>;
    httpCookieDomain?: pulumi.Input<string>;
    httpCookieDomainFromHost?: pulumi.Input<string>;
    httpCookieGeneration?: pulumi.Input<number>;
    httpCookiePath?: pulumi.Input<string>;
    httpCookieShare?: pulumi.Input<string>;
    httpsCookieSecure?: pulumi.Input<string>;
    ldbMethod?: pulumi.Input<string>;
    persistence?: pulumi.Input<string>;
    quic?: pulumi.Input<inputs.ObjectFirewallAccessproxy6ApigatewayQuic>;
    realservers?: pulumi.Input<pulumi.Input<inputs.ObjectFirewallAccessproxy6ApigatewayRealserver>[]>;
    samlRedirect?: pulumi.Input<string>;
    samlServer?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    service?: pulumi.Input<string>;
    sslAlgorithm?: pulumi.Input<string>;
    sslCipherSuites?: pulumi.Input<pulumi.Input<inputs.ObjectFirewallAccessproxy6ApigatewaySslCipherSuite>[]>;
    sslDhBits?: pulumi.Input<string>;
    sslMaxVersion?: pulumi.Input<string>;
    sslMinVersion?: pulumi.Input<string>;
    sslRenegotiation?: pulumi.Input<string>;
    sslVpnWebPortal?: pulumi.Input<string>;
    urlMap?: pulumi.Input<string>;
    urlMapType?: pulumi.Input<string>;
    virtualHost?: pulumi.Input<string>;
}
